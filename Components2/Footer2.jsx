import React from 'react'
import twitter from "../Images/Twitter Icon.svg";
import facebook from "../Images/Facebook Icon.png";
import insta from "../Images/Instagram Icon.png";
import git from "../Images/GitHub Icon.png";

export default function Footer2() {
  return (
    <>
      <div className="footer2 ">
        <div className="footer">
          <img src={twitter} />
          <img src={facebook} />
          <img src={insta} />
          <img src={git} />
        </div>
      </div>
    </>
  );
}
