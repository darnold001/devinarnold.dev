import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import TypeWriter from "../Typewriter";
export default function WelcomeModal(props) {
  const {showNav} = props;
  useEffect(()=>{
showNav()
  },[])
  return (
    <div className="welcome-modal" >
      <div className="modal-wrapper">
        <TypeWriter
          heading={"About Me:"} 
          messages={["I am a full stack developer with a passion for design.","I currently live in Denver, Colorado."]}
        />
        <NavLink to='/about' onClick={showNav}>Learn More</NavLink>
      </div>
    </div>
  );
}
