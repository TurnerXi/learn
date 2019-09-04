import React, { Component } from 'react';
import { Temp1, Temp2 } from '../templates'
export default class Templates extends Component {
  render() {
    switch (this.props.page) {
      case 'fun':
        return (<Temp2></Temp2>);
      default:
        return (<Temp1></Temp1>);
    }
  }
}