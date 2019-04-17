import React from 'react';
import logo from '../../assets/logo.png';
import { Container, Form } from './styles';
import CompareList from '../../components/CompareList';

const Main = () => (
  <Container>
    <img src={logo} alt="GitHub Compare" />
    <Form>
      <input placeholder="Usuário/repositório" onChange={e => e.preventDefault()} />
      <button type="submit">OK</button>
    </Form>

    <CompareList />
  </Container>
);

export default Main;
