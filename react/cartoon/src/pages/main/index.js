import React, { Component } from 'react';
import { Switch, Route, Link, NavLink } from 'react-router-dom';
import Searchbar from '../../assets/components/searchbar';
import { Temp1, Temp2 } from './templates';
import './index.css';
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navs: [
        { title: '推荐', link: '' },
        { title: 'FUN会员', link: '/fun' },
        { title: '动画', link: '/anim' },
        { title: '漫画', link: '/cartoon' },
        { title: '轻小说', link: '/novel' },
        { title: '免费', link: '/free' },
        { title: '日轻', link: '/light' }
      ]
    }
  }

  render() {
    let { navs } = this.state;
    let { match } = this.props;
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
          <ul className="c-nav-list">
            {
              navs.map((item) => (
                <li className="c-nav-item" key={item.link}>
                  <NavLink activeClassName="c-nav-active" to={match.url+item.link}>{item.title}</NavLink>
                </li>
              ))
            }
          </ul>
        </div>
        <Switch>
          <Route exact path={match.url} component={Temp1}></Route>
          <Route path={match.url+'/fun'} component={Temp2}></Route>
        </Switch>
      </main>
    )
  }
}
