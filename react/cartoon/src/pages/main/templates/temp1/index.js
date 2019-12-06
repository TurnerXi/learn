import React, { Component } from 'react';
import './index.css';
import CardBanner from '@/components/scrollcard';
import Block1 from '../block1';
import Block1Data from './block1.json';
export default class Temp1 extends Component {

  onBannerClickEvent(link) {
    this.props.history.push(link);
  }

  render() {
    return (
      <div className="c-temp-wrapper">
        <CardBanner onClick={this.onBannerClickEvent.bind(this)}></CardBanner>
        <Block1 title="会员免费漫画" list={Block1Data}></Block1>
      </div>
    );
  }
}
