import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Main from '../pages/main';
import './index.css';
export default class Layout extends Component {
  render() {
    return (
      <div className="o-page-container">
        <HashRouter>
            <Switch>
              <Route exact path="/" component={Main}></Route>
            </Switch>
        </HashRouter>
        <div className="c-navbar">
          <ul className="c-navbar-list">
            <li className="active"><i className="iconfont c-navbar-icon">&#xe6d7;</i><span className="c-navbar-title">首页</span></li>
            <li><i className="iconfont c-navbar-icon">&#xe6ac;</i><span className="c-navbar-title">搜索</span></li>
            <li><i className="iconfont c-navbar-icon">&#xe6a0;</i><span className="c-navbar-title">收藏</span></li>
            <li><i className="iconfont c-navbar-icon">&#xe6b8;</i><span className="c-navbar-title">我的</span></li>
          </ul>
        </div>
      </div>
    )
  }
}
