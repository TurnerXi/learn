import React, { Component, Fragment } from 'react';
import Menu from '@/assets/components/menu';
export default class ReaderMenu extends Component {

  constructor(props) {
    super(props);
    this.trans = 0;
    this.totalWidth = document.documentElement.offsetWidth * 0.8;
    this.maskRef = React.createRef();
    this.menuRef = React.createRef();
  }
  componentDidUpdate() {
    this.debounce(this.trans);
  }

  debounce(pos) {
    this.trans = pos;
    this.maskRef.current.style = `transition: opacity .3s ease; opacity: ${0.5 * this.trans};display: ${this.trans === 0 ? 'none' : 'block'}`
    this.menuRef.current.style = `transition: transform .3s ease; transform: translateX(${(this.trans - 1) * 100}%);`
    setTimeout(() => {
      this.maskRef.current.style.transition = '';
      this.menuRef.current.style.transition = '';
    }, 300);
  }

  onTouchStartEvent(e) {
    e.stopPropagation();
    this.touchBeginX = e.changedTouches[0].clientX;
    this.touchBeginY = e.changedTouches[0].clientY;
    this.moveDirectX = true;
  }
  onTouchMoveEvent(e) {
    e.stopPropagation();
    if (this.moveDirectX) {
      this.isMoving = true;
      this.touchMoveX = e.changedTouches[0].clientX - this.touchBeginX;
      this.touchMoveY = e.changedTouches[0].clientY - this.touchBeginY;
      if (Math.abs(this.touchMoveY) > Math.abs(this.touchMoveX)) {
        this.moveDirectX = false;
        return;
      }
      this.trans = Math.min(1 + this.touchMoveX / this.totalWidth, 1);
      this.maskRef.current.style.opacity = 0.5 * this.trans;
      this.menuRef.current.style.transform = `translateX(${(this.trans - 1) * 100}%)`;
    } else {
      this.isMoving = false;
    }
  }
  onTouchEndEvent(e) {
    this.moveDirectX = true;
    if (this.isMoving) {
      e.stopPropagation();
      this.isMoving = false;
      if (this.trans > 0.5) {
        this.debounce(1);
      } else {
        this.debounce(0);
        this.props.onClick(false);
      }
    }
  }
  onMaskClickEvent() {
    this.props.onClick(false);
  }

  getMaskStyles() {
    return { opacity: 0.8 * this.trans, display: this.trans === 0 && 'none' };
  }

  getMenuStyles() {
    return { transform: `translateX(${(this.trans - 1) * 100}%)` };
  }
  render() {
    let { current, catalogs, isShow } = this.props;
    let { serializeStatus, episodeCount, episodes } = catalogs;
    this.trans = isShow ? 1 : 0;
    return (
      <Fragment>
        <div ref={this.maskRef} className="c-reader__mask" onClick={this.onMaskClickEvent.bind(this)}></div>
        <Menu forwardedRef={this.menuRef} className="c-reader__menu"
          activeClassName="c-reader__menu-active"
          serializeStatus={serializeStatus}
          episodeCount={episodeCount}
          episodes={episodes}
          current={current}
          onTouchStart={this.onTouchStartEvent.bind(this)}
          onTouchMove={this.onTouchMoveEvent.bind(this)}
          onTouchEnd={this.onTouchEndEvent.bind(this)}></Menu>
      </Fragment >
    )
  }
}
