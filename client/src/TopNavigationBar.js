import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './style.css';

const TopNavigationBar =()=>{
return(
<nav className="top-navigation-bar">
  <ul>
  <li><a href="default.asp">Home</a></li>
  <li><a href="news.asp">News</a></li>
  <li><a href="contact.asp">Contact</a></li>
  <li><a href="about.asp">About</a></li>
</ul> 

  </nav>

)};

export default TopNavigationBar;