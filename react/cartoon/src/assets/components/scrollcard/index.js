import React, { Component } from "react";
import InnerSlick from './inner';
import './index.css';
import link1 from '../../images/601b5c0ff5eb4ca281433849a6211a70.jpg';
import link2 from '../../images/ae3a33a59e184041b0c770dae84972c6.jpg';
import link3 from '../../images/cdc4becec8a742249487f7f6f0a64c94.jpg';
import link4 from '../../images/d4cc9951f827453bb2b4ef0ba4ea1dbb.jpg';
export default class Swiper extends Component {
  constructor(props) {
    super(props);
    this.slick = React.createRef();
    this.transX = 0;
    this.state = {
      activeIdx: 0
    }
  }
  init() {
    this.slickDOM = this.slick.current;
    let rect = this.slickDOM.getClientRects()[0];
    this.width = rect.width;
    this.slickDOM.style.width = `${this.width * 4}px`;
    for (var child of this.slickDOM.children) {
      child.style.width = `${this.width}px`;
    }
  }

  componentDidMount() {
    this.init();
  }

  componentDidUpdate() {}

  onTouchStartEvent(e) {
    this.isMoving = true;
    this.startX = e.touches[0].clientX + this.transX;
    this.slickDOM.style.transition = "";
  }

  onTouchMoveEvent(e) {
    if (this.isMoving) {
      this.currentX = e.touches[0].clientX;
      this.transX = this.startX - this.currentX;
      if (this.transX < 0) {
        this.transX = 0;
      } else if (this.transX > 3 * this.width) {
        this.transX = 3 * this.width;
      }
      this.slickDOM.style.transform = `translate3d(${-this.transX}px,0,0)`;
    }
  }

  onTouchEndEvent(e) {
    this.isMoving = false;
    let innerStyleMap = window.getComputedStyle(this.slickDOM.children[0]);
    let innerMargin = parseFloat(innerStyleMap['marginLeft']);
    let idx = parseInt(this.transX / this.width);
    let offset = this.transX % this.width;
    if (offset > innerMargin * 2 && (idx >= this.state.activeIdx)) {
      idx += 1;
    }
    this.transX = idx * this.width;
    this.slickDOM.style.transition = "transform .3s ease-in-out";
    this.slickDOM.style.transform = `translate3d(${-this.transX}px,0,0)`;
    this.setState({ activeIdx: idx });
  }

  render() {
    let list = [
      { "href": "/manhua/detail_18yzmsei91.html", "title": "在座的都是废物", "img": link1, "desc": '欲擒故纵，到底谁才是赢家？', isActive: false },
      { "href": "/manhua/detail_18yzmjunad.html", "title": "爱在西元前", "img": link2, "desc": '跨越时空的爱恋，铃声解开了羁绊', isActive: false },
      { "href": "/manhua/detail_18yzrkae8l.html", "title": "晴霁何处", "img": link3, "desc": '吸血鬼大人，请放过我', isActive: false },
      { "href": "/manhua/detail_18yzmpfv2t.html", "title": "君非君", "img": link4, "desc": '穿越成皇后接了个烂剧本也要逆袭', isActive: false }
    ]

    let listProps = {
      onTouchStart: this.onTouchStartEvent.bind(this),
      onTouchMove: this.onTouchMoveEvent.bind(this),
      onTouchEnd: this.onTouchEndEvent.bind(this)
    }

    return (
      <div className="c-slick-wrapper">
        <div ref={this.slick} className="c-slick" {...listProps}>
          {
            list.map((item, idx) => (
              <InnerSlick
                {...item}
                key={idx}
                isActive={this.state.activeIdx === idx}
                className="c-slick-item"
                activeClassName="c-slick-item-active"
              >
              </InnerSlick>
            ))
          }
        </div>
      </div>
    )
  }
}
