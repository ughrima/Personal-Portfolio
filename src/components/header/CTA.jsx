import React from "react";
import resume from "../../assets/resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={resume} download="Agrima_Jain_Resume.pdf" className="btn btn-primary">Download CV</a>
      <a href="#contact" className="btn">Contact Me</a>
    </div>
  )
}

export default CTA
