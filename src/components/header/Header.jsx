import React from "react";
import "./header.css"
import CTA from "./CTA"; 
import HeaderSocials from "./headersocials";

const Header = () => {
  return (
      <header>
      <div className="container header_container">
        <h2>Hello I'm</h2>
        <h1>Agrima Jain</h1>
        <h2>Student Developer</h2>
        <CTA/>
        <HeaderSocials/>
      </div>
    </header>
  )
}

export default Header
