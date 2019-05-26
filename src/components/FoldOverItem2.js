import React, { Component } from 'react';
import yt from "../pictures/yt.jpg"
import fb from "../pictures/fb.jpg"



class FoldOverItem2 extends Component {
    render() {

      return (
        <div className="linksContainer">
         <a href={'https://www.facebook.com/comicArloLeonardo'} alt="Arlo Leonardo">
          <img  className="linkStyle" src={fb}/><br/>
           <br />
             <br/>
          </a>
          <a href={'https://www.youtube.com/channel/UCtlObc9T3bcuRBegVgI4J3w'} alt="Arlo Leonardo">
           <img  className="linkStyle" src={yt}/><br/>
            <br />
              <br/>
           </a>
        </div>
      );
    }
  }

export default FoldOverItem2;
