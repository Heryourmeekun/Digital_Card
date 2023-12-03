import React from 'react'
import Images from "../Images/Rectangle 90.png";
import Image from "../Images/Mail.svg";
import imag from "../Images/Mail.svg";
import About2 from './About2'
import Intrest2 from './Intrest2'
import Footer2 from './Footer2'

export default function Profile2() {
  return (
    <>
      <div className="main2">
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
          <b className="name4">Laura Smith</b>
          <br />
          <span id="name5">Frontend Developer</span>
          <p id="name6"> laurasmith.website</p>

          <div className="email1">
            <div className="mail1">
              <img src={Image} id="imag" /> <span>Email</span>
            </div>
            {/* <div className="link">
              <img src={imag} id="ima" /> <span>Linkedin</span>
            </div> */}
          </div>
        </div>
        <br />
        <br />
        <About2 />
              <Intrest2 />
              <Footer2/>
      </div>
    </>
  );
}
