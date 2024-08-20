import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './features/menuSlice';
import orderReducer from './features/orderSlice';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    order: orderReducer,
  },
});
