import React, { Component } from "react";
import { mergeClassName } from '../../../../utils/dom';
import LazyImage from '../../lazyimage';
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
    let className = isActive ? mergeClassName(classNameProp, activeClassName) : classNameProp;
    this.clickable = isActive;
    return (
      <div onClick={this.onClickEvent.bind(this)} className={className} >
          <LazyImage src={img} alt={title} className="c-slick-inner-img"/>
          <div className="c-slick-inner-text">
            <h3 className="c-slick-inner-title">{title}</h3>
            <p className="c-slick-inner-desc">{desc}</p>
          </div>
      </div>
    )
  }
}
