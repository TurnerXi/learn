import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LazyImage from '@/assets/components/lazyimage';
import './index.css';
export default class Block1 extends Component {
  render() {
    let { title, list } = this.props;
    return (
      <div className="c-block-wrapper">
            <h2 className="c-block-title">{title}</h2>
            <section className="c-block-content">
              {
                list.map((item,idx) => (
                  <Link className="c-block-item" to={`/comic/detail/${item.comicId}`} key={idx}>
                    <LazyImage src={item.pic} alt={item.title} className="c-block-item-img"/>
                    <h3 className="c-block-item-title">{item.title}</h3>
                    <p className="c-block-item-tags">
                      {
                        item.comicTags.split(',').map(tag => (
                          <span className="c-block-item-tag" key={tag}>{tag}</span>
                        ))
                      }
                    </p>
                  </Link>
                ))
              }
            </section>
            <div className="c-block-btns">
                <span className="c-block-btn iconfont">查看更多&nbsp;&#xe600;</span>
                <span className="c-block-btn iconfont">换一批&nbsp;&#xe601;</span>
            </div>
        </div>
    )
  }
}
