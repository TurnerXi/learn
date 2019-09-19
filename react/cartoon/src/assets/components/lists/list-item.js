import React, { Component } from 'react';
import { mergeClassName } from '../../../utils/dom'
export default class ListItem extends Component {
  render() {
    let { children, isActive, className: clzName, activeClassName, ...props } = this.props;
    let className = mergeClassName('c-lists__item', clzName);
    if (isActive) {
      className = mergeClassName(className, activeClassName);
    }
    return (
      <li className={className} {...props}>{children}</li>
    )
  }
}
