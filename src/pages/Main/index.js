import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FavoriteActions from '../../store/actions/favorites';

import api from '../../services/api';

import logo from '../../assets/logo.png';
import { Container, Form } from './styles';
import CompareList from '../../components/CompareList';

class Main extends Component {
  state = {
    error: false,
    loading: false,
    repositories: [],
    repositoryInput: '',
  };

  handleInput = (e) => {
    this.setState({ repositoryInput: e.target.value });
  };

  handleAddRepository = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        error: false,
        repositoryInput: '',
        repositories: [...this.state.repositories, repository],
      });
    } catch (err) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleAddFavorite = (e) => {
    e.preventDefault();
    const repo = {
      id: 123,
      name: 'teste',
      owner: {
        login: 'teste',
        avatar_url:
          'https://image.freepik.com/free-vector/vector-lightning-icon-logo-symbols-template_8075-62.jpg',
      },
      stargazers_count: 123,
      forks_count: 321,
      open_issues_count: 456,
      pushed_at: 'teste',
    };

    this.props.addFavorite(repo);
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="GitHub Compare" />

        <Form error={this.state.error} onSubmit={this.handleAddFavorite}>
          <input
            type="text"
            onChange={this.handleInput}
            placeholder="Usuário/repositório"
            value={this.state.repositoryInput}
          />
          <button type="submit">
            {this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}
          </button>
        </Form>

        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}

Main.propTypes = {
  addFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      pushed_at: PropTypes.string,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  favorites: state.favorites,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
