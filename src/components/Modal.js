import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class Modal extends React.Component {
  render() {
     const { isOpen, ...rest } = this.props;
if (!isOpen){
  return null;
}

    return ReactDOM.createPortal(
      <div {...rest}>{this.props.children}>

      </div>,
      document.querySelector('#modal-root')
    );
  }
}

export default Modal;
