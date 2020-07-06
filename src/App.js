import React from "react";
import './app.css'
import {Header} from "./components/Header"
import {Footer} from "./components/Footer"
import {Body} from "./components/Body"


export default () => (
  <div className = "app">
        {/*Have to have a seperate div for content to seperate it from footer to allow sticky footer to work : */}
        {/*This was the most vanilla solution I could find and it's awesome compared to some others: https://dev.to/letsbsocial1/flexbox-sticky-footer-and-react-e1h*/}
      <div className="content">
      <Header/>
      <Body/>
      </div>
      <Footer/>
  </div>
);
