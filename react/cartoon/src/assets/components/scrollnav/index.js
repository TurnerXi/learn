import React, { Component, createRef } from 'react';
import NavLinkItem from '../../../pages/main/containers/NavLinkItem';
import './index.css';
export default class ScrollNav extends Component {
  constructor(props) {
    super(props);
    this.myRef = createRef();
    this.state = {
      navs: [
        { title: '推荐', page: '' },
        { title: 'FUN会员', page: 'fun' },
        { title: '动画', page: 'anim' },
        { title: '漫画', page: 'cartoon' },
        { title: '轻小说', page: 'novel' },
        { title: '免费', page: 'free' },
        { title: '日轻', page: 'light' }
      ]
    }
  }

  componentDidMount() {
    let clientRect = this.myRef.current.getClientRects();
    let parentRect = this.myRef.current.parentElement.getClientRects();
    this.width = clientRect[0].width;
    this.pWidth = parentRect[0].width;
    this.max = this.width - this.pWidth;
    this.left = 0;
  }

  onTouchStart(event) {
    this.left = -parseFloat(this.myRef.current.style.transform.replace('translateX(', '')) || 0;
    this.isMoving = true;
    this.beginX = event.touches[0].pageX;
    this.distX = this.beginX - this.left;
  }

  onTouchMove(event) {
    if (this.isMoving) {
      this.currentX = event.touches[0].pageX;
      let left = (this.distX - this.currentX) || 0;
      this.left = left < 0 ? 0 : (left > this.max ? this.max : left);
      this.myRef.current.style.transform = `translateX(${-this.left}px)`;
    }
  }
  onTouchEnd() {
    this.isMoving = false;
  }

  onActive(event) {
    let rect = event.target.getClientRects()[0];
    let left = (rect.x + rect.width / 2 + this.left) - this.pWidth / 2;
    this.left = left < 0 ? 0 : (left > this.max ? this.max : left);
    this.myRef.current.style.transition = "transform .3s ease-in-out";
    this.myRef.current.style.transform = `translateX(${-this.left}px)`;
    setTimeout(() => {
      this.myRef.current.style.transition = "";
    }, 300);
  }

  render() {
    let { className: classNameProp } = this.props;
    let { navs } = this.state;
    let wrapperStyle = {
      overflow: 'hidden'
    }
    return (
      <div className={classNameProp} style={wrapperStyle}>
        <ul ref={this.myRef}
          className="c-scrollnav-list"
          onTouchStart={this.onTouchStart.bind(this)}
          onTouchMove={this.onTouchMove.bind(this)}
          onTouchEnd={this.onTouchEnd.bind(this)}
        >
        {
          navs.map((item) => (
            <NavLinkItem
              className="c-nav-item"
              activeClassName="c-nav-active"
              pageName={item.page}
              key={item.page}
              onActive={this.onActive.bind(this)}
            >
              {item.title}
            </NavLinkItem>
          ))
        }
        </ul>
      </div>
    )
  }
}
