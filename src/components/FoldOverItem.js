import React, { Component } from 'react';


class FoldOverItem extends Component {
    render() {

      return (
        <div className="FoldOverItem">
          <p>{this.props.message}
          </p>
        </div>
      );
    }
  }

export default FoldOverItem;
