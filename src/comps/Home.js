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

          <div className="move-to-right">
            <div className="edge-box">
              <h2>Recent</h2>
              <a href="/recent">Recent</a>
            </div>
          </div>

          <div className="text-box">
            <div className="text">
              <p>
                This is a test for the size. I just wanted to 
                play with the paragraph stuff. So this is where
                the website's description and goal would be 
                listed. It would also include some basic information
                about why the user should choose this site over 
                another similar site. Does that sound correct?
              </p>
            </div>
          </div>
        </div>


      </div>
    );
  }
  
  export default Home;
  