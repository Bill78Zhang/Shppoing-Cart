import React from 'react';
// components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
// items
import cartItems from './cart-items';
import {store} from './store.js/configureStore';
// redux stuff
import {Provider} from 'react-redux';
function App() {
  // cart setup

  return (
    <Provider store={store}>
      <main>
        <Navbar />
        <CartContainer cart={cartItems} />
      </main>
    </Provider>
  );
}

export default App;
