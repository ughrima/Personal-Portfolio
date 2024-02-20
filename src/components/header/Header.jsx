// import React from "react";
// import "./header.css"
// import CTA from "./CTA"; 
// import HeaderSocials from "./headersocials";

// const Header = () => {
//   return (
//       <header>
//       <div className="container header_container">
//         <h2>Hello I'm</h2>
//         <h1>Agrima Jain</h1>
//         <h2>Student Developer</h2>
//         <CTA/>
//         <HeaderSocials/>
//       </div>
//     </header>
//   )
// }

// export default Header

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
        <h2 ref={typedTextRef}></h2>
        <CTA />
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;

