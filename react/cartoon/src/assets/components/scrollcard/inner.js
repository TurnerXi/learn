import React, { Component } from "react";
import { joinClassName } from '../../../utils/dom';
export default class InnterSlick extends Component {
  onClickEvent(e) {
    if (this.clickable === false) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.clickable = true;
  }
  render() {
    let { className: classNameProp, link, img, title, desc, isActive, activeClassName } = this.props;
    let className = isActive ? joinClassName(classNameProp, activeClassName) : classNameProp;
    this.clickable = isActive;
    return (
      <div onClick={this.onClickEvent.bind(this)} className={className} >
          <img src={img} alt={title} className="c-slick-img"/>
      </div>
    )
  }
}
