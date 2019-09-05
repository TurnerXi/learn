import React, { Component } from "react";
import { joinClassName } from '../../../utils/dom';
export default class Nav extends Component {
  onClickEvent() {
    let { onClickEvent, onActive } = this.props;
    onClickEvent(...arguments);
    onActive(...arguments);
  }
  render() {
    let { pageName, current, activeClassName, children, className: classNameProp } = this.props;
    let isActive = pageName === current;
    let className = isActive ? joinClassName(classNameProp, activeClassName) : classNameProp;
    return (
      <li className={className} onClick={this.onClickEvent.bind(this)}>
        {children}
      </li>
    )
  }
}
