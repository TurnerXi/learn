import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Searchbar from '../../assets/components/searchbar';
import ScrollNav from './containers/ScrollNav';
import MainPage from './containers/MainPage';
import './index.css';
export default class Main extends Component {
  render() {
    let data = [
      { title: '推荐', page: '' },
      { title: 'FUN会员', page: 'fun' },
      { title: '动画', page: 'anim' },
      { title: '漫画', page: 'cartoon' },
      { title: '轻小说', page: 'novel' },
      { title: '免费', page: 'free' },
      { title: '日轻', page: 'light' }
    ]
    return (
      <main className="o-page-main">
        <div className="c-header">
          <div className="c-header-logo">
            <div className="c-logo"></div>
          </div>
          <Link className="c-header-searchbar" to="/search"><Searchbar>今天开始做明星</Searchbar></Link>
          <div className="c-header-tools">
            <span className="c-tool-menu"></span>
          </div>
        </div>
        <div className="c-nav">
          <ScrollNav className="c-nav-list" list={data}></ScrollNav>
        </div>
        <MainPage></MainPage>
      </main>
    )
  }
}
