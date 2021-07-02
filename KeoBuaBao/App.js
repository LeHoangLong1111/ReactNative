import React from 'react';
import Index from './src/components/index';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
};

export default App;
