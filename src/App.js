import React, { Component } from 'react';
import Laugh from "./components/Laugh"
import Navigation from "./components/Navigation"
import Modal from "./components/Modal"
import FoldOverItem from "./components/FoldOverItem"
import FoldOverItem2 from "./components/FoldOverItem2"
import FoldOverItem3 from "./components/FoldOverItem3"
import FoldOverItem4 from "./components/FoldOverItem4"

import {BrowserRouter, Route, Switch, browserHistory} from "react-router-dom";

import './App.css';


var foldOver = {
  'name':'name',
  'links':'links',
  'schedule':'Clips',
  'blog':'blog'
}

var Career = {
  'intro':''
}

class App extends Component {
  render() {

    return (
      <div className="App">
      <BrowserRouter >
       <Navigation  />
       <Switch >


        <div className="">



          <Route className='' path="/" component={FoldOverItem} >

          </Route>



          <Route className='' path="/FoldOverItem" component={FoldOverItem} message="i am the best coder in the world" >

          </Route>



          <Route className='foldOver' path="/FoldOverItem2" component={FoldOverItem2} >

          </Route>



          <Route className='foldOver' path="/FoldOverItem3" component={FoldOverItem3}>

          </Route>

          <Route className='foldOver' path="/FoldOverItem4" component={FoldOverItem4}>

          </Route>


      </div>
         <Route component={Error}></Route>
                 </Switch>
      </BrowserRouter>

         <div classNames="">
            <Laugh message= {Career.intro} />
          </div>
      </div>
    );
  }
}

export default App;
