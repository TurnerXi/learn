import React, { Component } from 'react';
export default class LazyImage extends Component {
  static styles = {
    opacity: '0',
    transition: 'all .3s ease-in-out'
  }
  onLoadEvent(e) {
    e.target.style.opacity = 1;
  }
  render() {
    return (
      <img {...this.props} style={LazyImage.styles} onLoad={this.onLoadEvent.bind(this)} alt={this.props.alt}/>
    )
  }
}
