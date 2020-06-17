import React from 'react';
import Header from './Header'
import ProductList from'./ProductList'
import Eyes from './Eyes'
import Lips from './Lips'
import Face from './Face'
import Nails from './Nails'
import Footer from './Footer'
import Cart from './Cart/Cart'
import ProductDetails from './ProductDetails'
import Modal from './Modal'
import Login from './Login'
import Signup from './Signup'
import { Switch, Route } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={ProductList} />
      
        <Route exact path='/eyes'><Eyes /></Route>
     
        <Route exact path='/lips'><Lips /></Route>

        <Route exact path='/face'><Face /></Route>
      
        <Route exact path='/nails'><Nails /></Route>

        <Route exact path='/signup'><Signup /></Route>

        <Route exact path='/login'><Login /></Route>
 
        <Route exact path='/cart' component={Cart} />

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
