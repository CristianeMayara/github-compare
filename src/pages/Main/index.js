import React from 'react';
import logo from '../../assets/logo.png';
import { Container, Form } from './styles';

const Main = () => (
  <Container>
    <img src={logo} alt="GitHub Compare" />
    <Form>
      <input placeholder="Usuário/repositório" onChange={e => e.preventDefault()} />
      <button type="submit">OK</button>
    </Form>
  </Container>
);

export default Main;
