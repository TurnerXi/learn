import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Searchbar from '../../assets/components/searchbar';
import ScrollNav from '../../assets/components/scrollnav';
import MainPage from './containers/MainPage';
import './index.css';
export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    // let { match } = this.props;
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
          <ScrollNav className="c-nav-list">
          </ScrollNav>
        </div>
        <MainPage></MainPage>
      </main>
    )
  }
}
