import React, { Component } from 'react';
import Navigation2 from  "../components/Navigation2"

import Yama2 from "../components/Yama2"
import Yama3 from "../components/Yama3"



import Niyama2 from "../components/Niyama2"

import Pranyama from "../components/Pranyama"



import {NavLink} from 'react-router-dom'
import {BrowserRouter, Route, Switch, browserHistory} from "react-router-dom";



class FoldOverItem4 extends Component {
    render() {

      return (
        <div>
        <BrowserRouter >
         <Navigation2  />
         <Switch >


           <div className="blogContainer">



             <Route className='' path="/" >
             </Route>


             <Route className='' path="/Pranyama" component={Pranyama}  >
             </Route>


             <Route className='' path="/Yama2" component={Yama2} >
             </Route>

             <Route  className='' path="/Yama3" component={Yama3}>
             </Route>

             <Route  className='' path="/Niyama2" component={Niyama2}>
             </Route>


        </div>
           <Route component={Error}></Route>
                   </Switch>
        </BrowserRouter>

        </div>
      );
    }
  }

export default FoldOverItem4;
