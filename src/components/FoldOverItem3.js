import React, { Component } from 'react';
import ridge from "../pictures/ridge.jpg"
import port from "../pictures/brokeHand.jpg"
import bronx from "../pictures/james2.jpg"
import core from "../pictures/james3.jpg"

class FoldOverItem3 extends Component {
    render() {
return(
      <div className="linksContainer">
      <a  href={''} alt="comicArloLeonardo">
       <img  className="linkStyle" src={ridge}/><br/>
        <br />
          <br/>
       </a><br/>
       <a href={''} alt="comicArloLeonardo">
        <img  className="linkStyle" src={port}/><br/>
         <br />
           <br/>
        </a>
        <a href={''} alt="comicArloLeonardo">
         <img  className="linkStyle" src={bronx}/><br/>
          <br />
            <br/>
         </a>
         <a href={''} alt="comicArloLeonardo">
          <img  className="linkStyle" src={core}/><br/>
           <br />
             <br/>
          </a>
      </div>
    )
  }
}

export default FoldOverItem3;
