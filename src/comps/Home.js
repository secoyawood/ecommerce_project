import '../css/home.css';
import React, {useState, useEffect} from 'react';

function Home() {
    return (
      <div className="Home">
        <div className="Header">
        <h1>Ecom</h1>
        <div className="header-links">
            <a href="/">Home</a>
            <a href="/store">Store</a>
            <a href="/account">Account</a>
        </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  