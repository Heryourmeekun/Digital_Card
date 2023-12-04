import React from "react";
import Image from "../Images2/Rectangle 77.png";
import rectangle from "../Images2/Rectangle 78.png";
import rectangle2 from "../Images2/Rectangle 84.png"


export default function Body() {
    return (
      <div className="first">
        <div className="Fuju">
          <div className="image">
            <img
              src={Image}
              style={{
                width: "155px",
                height: "220px",
              }}
            />
          </div>
          <div className="Mount">
            <span id="japan">J A P A N </span>
            <span id="google">
              
              <a href="">View on Google Maps</a>
            </span>{" "}
            <br />
            <span id="mount">Mount Fuji</span> <br />
            <br />
            <p id="jan">12 Jan, 2021-24 Jan, 2021</p>
            <span id="mountain">
              Mount Fuji is the tallest mountain in japan, standing at 3,776
              meters (12,880 feet). MOunt Fuji is the single most popular
              tourist site in japan, for both Japanese and foreign tourist
            </span>
          </div>
        </div>
        <div className="second">
          <div className="ausralia">
            <img
              src={rectangle}
              style={{
                width: "155px",
                height: "220px",
              }}
            />
          </div>
          <div className="Mount2">
            <span id="japan">A U S T R A L I A </span>
            <span id="google">
              <a href="">View on Google Maps</a>
            </span>
            <br />
            <span id="mount">Sydney Opera House</span> <br />
            <p id="jan2">27 May, 2021-08 June, 2021</p>
            <br />
            <span id="mountain">
                        The Sydney Oper House is a multi-venue performing arts centre in sydney. Located on the banks of the Stdney Harbour.
            </span>
          </div>
        </div>
        <div className="third">
          <div className="norway">
            <img
              src={rectangle2}
              style={{
                width: "155px",
                height: "220px",
              }}
            />
          </div>
          <div className="Mount3">
            <span id="japan">N O R W A Y </span>
            <span id="google">
              <a href="">View on Google Maps</a>
            </span>
            <br />
            <span id="mount">Geirangerfjold</span> <br />
            <p id="jan3">01 Oct, 2021-18 Nov, 2021</p>
            <br />
            <span id="mountain">
                        The Geiranger Fjord is a fjord in the Sunmare region of more og Romsdal country, Norway. it is loacted 
                        entirely in the stranda Municipality.
            </span>
          </div>
        </div>
      </div>
    );
}
