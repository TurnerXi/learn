import React, { Component } from 'react';
import './index.css';
export default class Searchbar extends Component {
  render() {
    return (
      <div className="c-searchbar">
        <div className="c-searchbar-wrapper">
          <span className="c-searchbar-placeholder">{this.props.children}</span>
        </div>
      </div>
    )
  }
}
