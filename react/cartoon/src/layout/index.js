import React, { Component } from 'react';
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';
import Main from '../pages/main';
import Search from '../pages/search';
import Fav from '../pages/fav';
import My from '../pages/my';
import './index.css';
export default class Layout extends Component {
  render() {
    return (
      <HashRouter className="o-page-container">
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/fav" component={Fav}></Route>
          <Route path="/my" component={My}></Route>
        </Switch>
        <div className="c-navbar">
          <ul className="c-navbar-list">
            <li><NavLink exact className="c-navbar-link" activeClassName="active" to="/"><i className="iconfont c-navbar-icon">&#xe6d7;</i><span className="c-navbar-title">首页</span></NavLink></li>
            <li><NavLink className="c-navbar-link" activeClassName="active" to="/search"><i className="iconfont c-navbar-icon">&#xe6ac;</i><span className="c-navbar-title">搜索</span></NavLink></li>
            <li><NavLink className="c-navbar-link" activeClassName="active" to="/fav"><i className="iconfont c-navbar-icon">&#xe6a0;</i><span className="c-navbar-title">收藏</span></NavLink></li>
            <li><NavLink className="c-navbar-link" activeClassName="active" to="/my"><i className="iconfont c-navbar-icon">&#xe6b8;</i><span className="c-navbar-title">我的</span></NavLink></li>
          </ul>
        </div>
      </HashRouter>
    )
  }
}
