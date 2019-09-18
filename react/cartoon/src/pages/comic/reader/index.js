import React, { Component } from 'react';
import Lists from './lists';
import ListItem from './list-item';
import Chapter from './chapter.json';
import Menu from './menu.json';
import './index.css';
export default class Reader extends Component {

  render() {
    let { episodeTitle, content } = Chapter;
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
            <div className="c-footer__tab">
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
      </div>
    )
  }
}
