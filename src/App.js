import React, { Component } from 'react';
import Laugh from "./components/Laugh"
import FoldOverItem from "./components/FoldOverItem"
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
        <div className="foldOverContainer">
          <div className='foldOver'>
            <FoldOverItem message={foldOver.name}/>
          </div>
          <div className='foldOver'>
            <FoldOverItem message={foldOver.links}/>
          </div>
          <div className='foldOver'>
            <FoldOverItem message={foldOver.schedule}/>
          </div>
          <div className='foldOver'>
            <FoldOverItem message={foldOver.blog}/>
          </div>
         </div>
         <div classNames="">
            <Laugh message= {Career.intro} />
          </div>
      </div>
    );
  }
}

export default App;
