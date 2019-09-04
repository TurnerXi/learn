import React, { Component } from 'react';
export default class Temp1 extends Component {
  render() {
    console.log(this.props.match.url)
    return (<div>temp1</div>);
  }
}
