import React from 'react'
import Body from './Body'
import Images from '../Images2/Fill 213.png'
export default function Dashbord() {
  return (
    <>
      <div className="journal">
        <div className="journa">
          <img src={Images} id="jon" />
          <span> my travel journal.</span>
        </div>

        <Body />
      </div>
    </>
  );
}
