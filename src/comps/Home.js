import '../css/home.css';
import React, {useState, useEffect} from 'react';
import Cart from '../cart.png';

function Home() {
    return (
      <div className="Home">
        <div className="Header">
          <div className="move">
            <img className="shopping-cart" src={Cart}/>
            <h1>Ecom</h1>
          </div>

          <input className="search-bar" type="text" placeholder="Search Products"></input>
          <div className="header-links">
            <a href="/">Home</a>
            <a href="/store">Store</a>
            <a href="/cart">Cart</a>
            <a href="/account">Account</a>
          </div>
        </div>

        <div className="happy-move">
          <div className="right-side-box">
           <h2>Side</h2>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  