import React, { Component } from "react";
export default class Nav extends Component {
  render() {
    let { pageName, current, activeClassName, children, className: classNameProp, onClickEvent } = this.props;

    let isActive = pageName === current;
    let className = isActive ? joinClassName(classNameProp, activeClassName) : classNameProp;
    return (
      <li className={className} onClick={onClickEvent}>
        {children}
      </li>
    )
  }
}

function joinClassName(...classnames) {
  return classnames.filter(i => i).join(" ");
}