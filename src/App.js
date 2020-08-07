import React from 'react';
import {Switch, Route, BrowserRouter, Redirect} from "react-router-dom";
import {Products, Cart} from './route'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={null} />
      <Route path="/products" component={Products} />
      <Route path="/cart" component={Cart} />
    </BrowserRouter>
  );
}

export default App;
