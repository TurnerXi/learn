import React, { Component } from 'react';
import ReaderMenu from './menu';
import Lists from '@/assets/components/lists';
import ListItem from '@/assets/components/lists/list-item';
import ChapterData from './chapter.json';
import MenuData from './menu.json';
import './index.css';
const TAB_CATAGORY = 'category';

export default class Reader extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowMenu: false, isShowTools: false };
    this.headerRef = React.createRef();
    this.footerRef = React.createRef();
    this.contentRef = React.createRef();
  }

  componentDidUpdate() {
    if (this.state.isShowTools) {
      this.headerRef.current.style.transform = 'translateY(0)';
      this.footerRef.current.style.transform = 'translateY(0)';
    } else {
      this.headerRef.current.style.transform = 'translateY(-100%)';
      this.footerRef.current.style.transform = 'translateY(100%)';
    }
    if (this.state.isShowMenu) {
      this.contentRef.current.style.overflow = 'hidden';
    } else {
      this.contentRef.current.style.overflow = 'scroll';
    }
  }

  onTabClickEvent(type, e) {
    switch (type) {
    case TAB_CATAGORY:
      this.setState({ isShowMenu: true, isShowTools: false });
      break;

    default:
      break;
    }
  }

  onMenuClickEvent(comicId) {
    this.setState({ isShowMenu: false });
    if (comicId) {
      let { id } = this.props.match.params;
      this.props.history.replace(`/comic/reader/${id}/${comicId}`);
    }
  }

  onReaderTouchStartEvent() {
    this.setState({ "isShowTools": !this.state.isShowTools });
  }

  onReaderTouchMoveEvent() {
    if (this.state.isShowTools) {
      this.setState({ "isShowTools": false });
    }
  }

  render() {
    let { isShowMenu } = this.state;
    let { episodeTitle, content } = ChapterData;
    let { allCatalog } = MenuData;
    return (
      <div className="c-container">
        <div className="c-header c-reader__header" ref={this.headerRef}>
          <span className="c-icon--backbtn"></span>
          <h2 className="c-header__title">{episodeTitle}</h2>
          <span className="c-header__tools">
            {/* <span className="c-icon--collect"></span> */}
            <span className="c-icon--dots"></span>
          </span>
        </div>
        <div className="c-reader__content"
           ref={this.contentRef}
           onTouchStart={this.onReaderTouchStartEvent.bind(this)}
           onTouchMove={this.onReaderTouchMoveEvent.bind(this)}
         >
          <div className="c-reader__list">
            <Lists>
              {
                content.map(({ imageUrl, pageOrder }) => {
                  return <ListItem key={pageOrder}><img className="c-reader__img" src={imageUrl} alt={pageOrder} /></ListItem>;
                })
              }
            </Lists>
          </div>
          <span className="c-reader__tile c-reader__tile--left">1/19话 {episodeTitle}</span>
          <span className="c-reader__tile c-reader__tile--right"></span>
        </div>
        <div className="c-footer c-reader__footer" ref={this.footerRef}>
          <div className="c-footer__tabs">
            <div className="c-footer__tab" onClick={this.onTabClickEvent.bind(this, TAB_CATAGORY)}>
              <em className="c-icon--category"></em>
              <span className="c-footer__txt">目录</span>
            </div>
            <div className="c-footer__tab">
              <em className="c-icon--last"></em>
              <span className="c-footer__txt">上一话</span>
            </div>
            <div className="c-footer__tab">
              <em className="c-icon--next"></em>
              <span className="c-footer__txt">下一话</span>
            </div>
            <div className="c-footer__tab">
              <em className="c-icon--preference"></em>
              <span className="c-footer__txt">设置</span>
            </div>
          </div>
        </div>
        <ReaderMenu isShow={isShowMenu} current="18yywann1l" catalogs={allCatalog} onClick={this.onMenuClickEvent.bind(this)}></ReaderMenu>
      </div>
    )
  }
}
