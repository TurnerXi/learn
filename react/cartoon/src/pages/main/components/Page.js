import React, { Component } from 'react';
import { Temp1, Temp2 } from '../templates'
export default class Page extends Component {
  render() {
    switch (this.props.page) {
      case 'fun':
        return (<Temp2 {...this.props}></Temp2>);
      default:
        return (<Temp1 {...this.props}></Temp1>);
    }
  }
}