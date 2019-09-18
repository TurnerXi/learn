import React, { Component } from 'react';
import Chapter from './chapter.json';
import Menu from './menu.json';
export default class Reader extends Component {
  let { episodeTitle } = Chapter;
  render() {
    return (
      <div className="c-container">
          <div className="c-header">
            <span className="c-icon__backbtn"></span>
            <h2 className="c-header__title">{episodeTitle}</h2>
            <span className="c-header__tools">
              <span className="c-icon__collect"></span>
              <span className="c-icon__dots"></span>
            </span>
          </div>
          <div className="c-reader__content">
              <div className="c-reader__list">
              </div>
              <span className="c-reader__tile--left"></span>
              <span className="c-reader__tile--right"></span>
          </div>
          <div className="c-footer">
              <div className="c-footer__tabs">
                  <span className="c-footer__tab"></span>
                  <span className="c-footer__tab"></span>
                  <span className="c-footer__tab"></span>
                  <span className="c-footer__tab"></span>
              </div>
          </div>
      </div>
    )
  }
}
