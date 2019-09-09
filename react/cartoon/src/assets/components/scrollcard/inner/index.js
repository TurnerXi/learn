import React, { Component } from "react";
import { joinClassName } from '../../../../utils/dom';
import './index.css';
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
          <img src={img} alt={title} className="c-slick-inner-img"/>
          <div className="c-slick-inner-text">
            <h3 className="c-slick-inner-title">{title}</h3>
            <p className="c-slick-inner-desc">{desc}</p>
          </div>
      </div>
    )
  }
}
