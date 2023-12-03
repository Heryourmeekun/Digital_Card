import React from 'react'
import Images from "../Images/Rectangle 90.png"
import Image from "../Images/Mail.svg"
import imag from "../Images/Mail.svg"
import About from './About';
import Interest from './Interest';
import Footer from './Footer';
  

export default function Profile() {
  return (
    <>
      <div className="main">
        <div className="">
          <img
            src={Images}
            alt=""
            style={{
              width: "400px",
            }}
          />
        </div>
        <div className="profile">
          <b className="name1">Laura Smith</b>
          <br />
          <span id="name2">Frontend Developer</span>
          <p id="name3"> laurasmith.website</p>

          <div className="email">
            <div className="mail">
              <img src={Image} id="imag" /> <span>Email</span>
            </div>
            <div className="link">
              <img src={imag} id="ima" /> <span>Linkedin</span>
            </div>
          </div>
        </div>
        <br />
        <br />
        <About />
        <Interest />
        <Footer />
      </div>
    </>
  );
}

