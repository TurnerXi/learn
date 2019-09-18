import React, { Component } from 'react';
export default class ListItem extends Component {
  render() {
    let { children, ...props } = this.props;
    return (
      <li className="c-lists__item" {...props}>{children}</li>
    )
  }
}
