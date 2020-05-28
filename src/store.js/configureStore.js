import {createStore} from 'redux';
import reducer from './reducers';
import cartItems from '../cart-items';
export const initStore = {
  items: cartItems,
  total: 500
};
export const store = createStore(reducer, initStore);
