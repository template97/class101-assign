import React from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import {Products, Cart} from './route'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Products} />
      <Route path="/products" component={Products} />
      <Route path="/cart" component={Cart} />
    </BrowserRouter>
  );
}

export default App;
