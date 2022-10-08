import React from 'react'

import "../Hello.css"
import "../Landing.css"

import logo from "../assets/images/logo.svg"
import main from "../assets/images/main.svg"

function Landing() {
  return (
    <main>
      <nav>
        <img src={logo} alt="Logo" className="image" />

      </nav>

      <div className="container page">
        <h1>Job <span>Tracking</span> App</h1>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book.

        </p>

        <h2>HI</h2>

        <button className="btn btn-hero">Login/Register</button>

        <img src={main} alt="main" className="image" />

      </div>
    </main>
  );
}

export default Landing