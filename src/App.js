import React from 'react';
import Header from './Header'
import ProductList from'./ProductList'
import Eyes from './Eyes'
import Lips from './Lips'
import Face from './Face'
import Nails from './Nails'
import Footer from './Footer'
import Cart from './Cart/Cart'
import Default from './Default'
import ProductDetails from './ProductDetails'
import Modal from './Modal'
import { Switch, Route } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'><ProductList /></Route>
      
        <Route exact path='/eyes'><Eyes /></Route>
     
        <Route exact path='/lips'><Lips /></Route>

        <Route exact path='/face'><Face /></Route>
      
        <Route exact path='/nails'><Nails /></Route>
 
        <Route exact path='/cart' component={Cart} />

        <Route component={Default} />

        </Switch>
     <Switch>
       <Route path='/:productsId'><ProductDetails /></Route>
      </Switch>
      
      <Modal />
      <Footer />
    </div>
  );
}

export default App;
