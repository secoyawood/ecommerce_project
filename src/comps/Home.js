import '../css/home.css';
import React, {useState, useEffect} from 'react';
import Anvil from '../Anvil.png';
import Tech from '../Cool-Tech-Image.jpg';

function Home() {
    return (
      <div className="Home">
        <div className="Header">
          <div className="logo">
            <img className="hammer-anvil" src={Anvil}/>
          </div>

          <div className="spacing">
            <h1>Hephaestus Refurbish</h1>
          </div>

          <input className="search-bar" type="text" placeholder="Search Products"></input>
          <div className="header-links">
            <a href="/">Home</a>
            <a href="/store">Store</a>
            <a href="/cart">Cart</a>
            <a href="/account">Account</a>
          </div>
        </div>

        <div className="Body">
          <div className="image-box">
            <img className="tech-image" src={Tech}/>
          </div>

          <div className="happy-move">
            <div className="right-edge">
              <h2>Side</h2>
            </div>
          </div>
          
          <div className="text-box">

          </div>
        </div>


      </div>
    );
  }
  
  export default Home;
  