import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './stores/context/CartContext.jsx'

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <CartProvider>
        <App />
      </CartProvider>

    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
