import React, { Component } from 'react';
// import start from './pictures/start.jpg'
const blogContent= {
  flex:'3',
  border:"2px dotted black",
  padding: "10px",
  margin: '30px',
  fontSize: '1.38em',
  content: ` I started seven years ago. I did my first act at an open mic on macdougal
         street. The first time I performed was completely surreal. As the words
         traveled out through the audience, I felt as if I was disappearing into
         the crowd. That is when I became one with my art.<br/><br/>I did a month
         at first. A few years later, I returned. This time I kept steady at it,
         once a week, for about six months. It only took a half a year to return
         this time. Now I do it about three times a week. Even though I've left,
          I never could stay away. Comedy is hard, but life is harder. Every time
          life beat me up, it made me realize that the stage is more my place than
           anywhere else.<br/><br/>I am more comfortable than ever before now.
          Comfort really is the key to success with this gig. This is where I
           belong.<br/><br/>
     Right now my passion is burning hotter for this than ever before.
      I think about how temporary everything that I love is. I've lost so
      many people. I've lost so many opportunities. I've wasted so much time.
      I realize that nothing is promised tomorrow. The way I see it, I better
      squeeze in as much time as I can before it's too late. That's my theory
      on life. Make the most of it while you still can.`
}
const imgStyle= {
  width:'100%'
}
class Laugh extends Component {
  render() {
    console.log()
    return (
      <div  className="Laugh">
      <p style={blogContent}>
{blogContent.content}
      </p>
      </div>
    );
  }
}

export default Laugh;
