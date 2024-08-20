import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import MenuList from './components/MenuList';
import OrderSummary from './components/OrderSummary';
import 'antd/dist/antd.css';

const App = () => (
  <Provider store={store}>
    <div>
      <h1>PDV Restaurante</h1>
      <MenuList />
      <OrderSummary />
    </div>
  </Provider>
);

export default App;
