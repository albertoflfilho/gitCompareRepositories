import React, { Fragment } from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/global';

const Title = styled.h1`
  color: #F00;
  font-size: 32px;
`;

const App = () => (
  <Fragment>
    <GlobalStyle />
    <div className="App">
      <Title>gitCompareRepositories</Title>
    </div>
  </Fragment>
);

export default App;
