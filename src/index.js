import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from './styles/global';
import App from './App';

const AppContainer = () => (
  <Fragment>
    <GlobalStyle />
    <App />
  </Fragment>
);

ReactDOM.render(<AppContainer />, document.getElementById('root'));
