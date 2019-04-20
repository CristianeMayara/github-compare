import React, { Component } from 'react';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import { Container, Form } from './styles';
import CompareList from '../../components/CompareList';

class Main extends Component {
  state = {
    repositories: [],
    repositoryInput: '',
  };

  handleInput = (e) => {
    this.setState({ repositoryInput: e.target.value });
  };

  handleAddRepository = async (e) => {
    e.preventDefault();

    try {
      const res = await api.get(`/repos/${this.state.repositoryInput}`);

      this.setState({
        repositoryInput: '',
        repositories: [...this.state.repositories, res.data],
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="GitHub Compare" />
        <Form onSubmit={this.handleAddRepository}>
          <input
            type="text"
            onChange={this.handleInput}
            placeholder="Usuário/repositório"
            value={this.state.repositoryInput}
          />
          <button type="submit">OK</button>
        </Form>

        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}

export default Main;
