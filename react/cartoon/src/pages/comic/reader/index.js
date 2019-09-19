import React, { Component } from 'react';
import ReaderMenu from './menu';
import Lists from '../../../assets/components/lists';
import ListItem from '../../../assets/components/lists/list-item';
import ChapterData from './chapter.json';
import MenuData from './menu.json';
import './index.css';
const TAB_CATAGORY = 'category';

export default class Reader extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowMenu: false };
  }
  onTabClickEvent(type, e) {
    switch (type) {
      case TAB_CATAGORY:
        this.setState({ isShowMenu: true });
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

  render() {
    let { isShowMenu } = this.state;
    let { episodeTitle, content } = ChapterData;
    let { allCatalog } = MenuData;
    return (
      <div className="c-container">
        <div className="c-header u-bgcolor__white u-opactity__9">
          <span className="c-icon--backbtn"></span>
          <h2 className="c-header__title">{episodeTitle}</h2>
          <span className="c-header__tools">
            {/* <span className="c-icon--collect"></span> */}
            <span className="c-icon--dots"></span>
          </span>
        </div>
        <div className="c-reader__content">
          <div className="c-reader__list">
            <Lists>
              {
                content.map(({ imageUrl, pageOrder }) => {
                  return <ListItem key={pageOrder}><img className="c-reader__img" src={imageUrl} alt={pageOrder} /></ListItem>;
                })
              }
            </Lists>
          </div>
          <span className="c-reader__tile--left">1/19话 {episodeTitle}</span>
          <span className="c-reader__tile--right"></span>
        </div>
        <div className="c-footer u-opactity__9">
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
        <ReaderMenu isShow={isShowMenu} current="18yzd2aupl" catalogs={allCatalog} onClick={this.onMenuClickEvent.bind(this)}></ReaderMenu>
      </div>
    )
  }
}