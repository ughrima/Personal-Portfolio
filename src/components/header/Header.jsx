import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import "./header.css";
import CTA from "./CTA"; 
import HeaderSocials from "./headersocials";

const Header = () => {
  const typedTextRef = useRef(null);

  useEffect(() => {
    if (typedTextRef.current) {
      const typed = new Typed(typedTextRef.current, {
        strings: ["AI & Tech Developer", "Software Engineer", "ML Researcher", "Full Stack Developer"],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        smartBackspace: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <header id="home">
      <div className="container header_container">
        <h5 className="text-light">Hello, I'm</h5>
        <h1>Agrima Jain</h1>
        <p className="text-light" ref={typedTextRef}></p>
        <CTA />
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;

