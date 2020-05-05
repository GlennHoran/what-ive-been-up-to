import React from "react";
import './app.css'
import {Header} from "./components/Header"
import {Footer} from "./components/Footer"
import {Body} from "./components/Body"


export default () => (
  <div className = "app">
      <Header/>
      <Body name = "Glenn"/>
      <Footer/>
  </div>
);
