import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import "./header.css";
import CTA from "./CTA"; 
import HeaderSocials from "./headersocials";

const Header = () => {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedTextRef.current, {
      strings: ["Frontend Devloper","Coder","ML Enthusiast"],
      typeSpeed: 100,
      backSpeed: 40,
      loop: true,
      showCursor: false, 
      smartBackspace: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <header>
      <div className="container header_container">
        <h2>Hello I'm</h2>
        <h1>Agrima Jain</h1>
        <p ref={typedTextRef} style={{fontSize:"30px"}}></p>
        <CTA />
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;

