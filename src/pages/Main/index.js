import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FavoriteActions } from '../../store/ducks/favorites';

import logo from '../../assets/logo.png';
import { Container, Error, Form } from './styles';
import CompareList from '../../components/CompareList';

class Main extends Component {
  state = {
    repositoryInput: '',
  };

  handleInput = (e) => {
    this.setState({ repositoryInput: e.target.value });
  };

  handleAddFavorite = (e) => {
    e.preventDefault();

    this.props.addFavoriteRequest(this.state.repositoryInput);

    this.setState({ repositoryInput: '' });
  };

  render() {
    const { error, loading, favorites } = this.props;
    return (
      <Container>
        <img src={logo} alt="GitHub Compare" />

        <Form error={!!error} onSubmit={this.handleAddFavorite}>
          <input
            type="text"
            onChange={this.handleInput}
            placeholder="Usuário/repositório"
            value={this.state.repositoryInput}
          />
          <button type="submit">{loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}</button>
        </Form>

        {!!error && <Error>{error}</Error>}

        <CompareList repositories={favorites} />
      </Container>
    );
  }
}

Main.propTypes = {
  addFavoriteRequest: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.oneOf([null, PropTypes.string]).isRequired,
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
  favorites: state.favorites.data,
  loading: state.favorites.loading,
  error: state.favorites.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
