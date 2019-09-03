import React from 'react'
import './Header.css'
export default class Header extends React.Component {

  render() {
    let backbtn = "";
    let { backtype } = this.props;
    if (backtype === 'index') {
      backbtn = <span className="Header-backbtn" onClick="window.location.href='/'">首页</span>;
    } else if (backtype === 'index') {
      backbtn = <span className="Header-backbtn" onClick="window.history.go(-1);"></span>;
    }

    return (
      <header className="Header">
          {backbtn}
          <div className="Header-title">{this.props.title}</div>
          <span className="Header-tools">
              {this.props.tools}
          </span>
        </header>
    )
  }
}
