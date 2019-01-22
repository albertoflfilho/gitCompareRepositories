import React from 'react';

import logo from '../../assets/logo.png';

import { Container, Form } from './styles';

const Main = () => (
  <Container>
    <img src={logo} alt="gitCompareRepositories" />

    <Form>
      <input type="text" placeholder="user/repository" />
      <button type="submit">OK</button>
    </Form>

  </Container>
);

export default Main;
