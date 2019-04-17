import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import { Container, Form } from './styles';
import CompareList from '../../components/CompareList';

class Main extends Component {
  state = {
    repositories: [],
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="GitHub Compare" />
        <Form>
          <input placeholder="Usuário/repositório" onChange={e => e.preventDefault()} />
          <button type="submit">OK</button>
        </Form>

        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}

export default Main;
