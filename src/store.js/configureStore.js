import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import cartItems from '../cart-items';
import createSagaMiddleware from 'redux-saga';
import {saga} from '../store.js/helper/saga';
export const initStore = {
  items: cartItems,
  total: 500
};

const sagaMiddleWare = createSagaMiddleware();
export const store = createStore(reducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(saga);
// sagaMiddleware is a process management
// saga is a generator function function*dadad
// use run() to execuate the saga
