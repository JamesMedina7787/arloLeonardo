import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import prana from "../pictures/buddha.jpg"
import satya  from "../pictures/brokeHand.jpg"
import santosha from "../pictures/james3.jpg"
import asteya from "../pictures/james2.jpg"

class Navigation2 extends Component {
  render() {
    console.log()
    return (
      <div className="linksContainer">

      <NavLink className="linkStyle"  to="/Pranyama"><img className="linkStyle" src={prana} /></NavLink><br/>
        <NavLink className="linkStyle"  to="/Yama2"><img className="linkStyle" src={satya} /></NavLink> <br/>
        <NavLink className="linkStyle"  to="/Yama3"><img className="linkStyle" src={asteya} /></NavLink><br/>
        <NavLink className="linkStyle"  to="/Niyama2"><img className="linkStyle" src={santosha} /></NavLink><br/>
      </div>
    );
  }
}

export default Navigation2;
