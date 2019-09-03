import React, { Component } from 'react'
import Horn from 'components/horn'
import './BlockOpr2.css'
export default class BlockOpr2 extends Component {

  render() {
    let { news } = this.props;
    return (
      <div className="c-opr2">
          {news&&news.length>0?(<Horn data={news}></Horn>):''}
      </div>
    )
  }
}
