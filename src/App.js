import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import GlobalStyle from './styles/global';
import Main from './pages/Main';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Main />
  </Provider>
);

export default App;
