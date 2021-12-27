import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id='about'>
      <h2>About Me</h2>
      <p>I am current enrolled in Flatiron's SE Bootcamp</p>
      <img src={image} alt='I made this'></img>
    </div>
  )
}

export default About;
