import React, { Component } from 'react';
import './index.css';
export default class My extends Component {
  render() {
    return (
      <div className="o-page-my">
        <div className="c-my-header">个人中心</div>
        <div className="c-my-container">
          <ul className="c-list">
            <li className="c-list-item">
              <span className="c-list-icon iconfont">&#xe696;</span>
              <span className="c-list-item-name">资源抓取</span>
              <span className="c-list-desc">更新中</span>
            </li>
            <li className="c-list-item">
              <span className="c-list-icon iconfont">&#xe601;</span>
              <span className="c-list-item-name">换源</span>
              <span className="c-list-desc"></span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
