import React,{useState} from 'react';
import "./NewNavbar.css";
import {FaFacebookSquare ,FaInstagramSquare ,FaYoutubeSquare} from "react-icons/fa"
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {

  const [showIcon, setShowIcon]=useState(false);

  return ( <>
      <nav className="main-nav">
        {/* 1st menu part */}
        <div className="logo">
            <h2>
             <span>S</span>tar
             <span>T</span>ech
            </h2>
        </div>
           {/* 2nd menu part */}
        <div className={
          showIcon ?"menu-link mobile-menu-link" :"menu-link"}>
          <ul>
            <li>
               <a href="#">Home</a>
             </li>
             <li>
               <a href="#">About</a>
             </li>
             <li>
               <a href="#">Service</a>
             </li>
             <li>
               <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        {/* 3rd part social media */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
                <a href="https://www.facebook.com" target="_Facebook"><FaFacebookSquare className="facebook" /></a>
            </li>
            <li>
                <a href="https://www.instagram.com/" target="_Instagram"><FaInstagramSquare className="instagram" /></a>
            </li>
            <li>
                <a href="https://www.youtube.com/" target="_Youtube"><FaYoutubeSquare className="youtube" /></a>
            </li>
          </ul>

          {/* Hamburger menu start */}
         <div className="hamburger-menu">
           <a href="#" onClick={()=> setShowIcon(!showIcon)}><GiHamburgerMenu /></a>

          </div>
        </div>
      </nav> 

      {/* Hero Section*/}
      <section className="hero-section">
        <p>Welcome to</p>
        <h1>Star Tech</h1>
      </section>
    </>
  )
}

export default Navbar;
