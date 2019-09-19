import React, { Component } from "react";
import { mergeClassName } from '../../../../utils/dom';
export default class Nav extends Component {
  render() {
    let { pageName, current, activeClassName, children, className: classNameProp, onClick } = this.props;
    let isActive = pageName === current;
    let className = isActive ? mergeClassName(classNameProp, activeClassName) : classNameProp;
    return (
      <li className={className} onClick={onClick}>
        {children}
      </li>
    )
  }
}
