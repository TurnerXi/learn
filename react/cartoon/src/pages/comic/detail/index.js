import React, { Component } from 'react';
import DetailData from './detail.json';
import { formatNum } from '../../../utils/number';
import './index.css';
export default class Detail extends Component {
  render() {
    let { id } = this.props.match.params;
    let {
      pic,
      title,
      authorsName,
      comicTags,
      favorites,
      clickCount,
      brief,
      latestEpisodeTitle,
      lastUpdateTime,
      episodeCount,
      lastEpisodeCover,
      popularity: { total }
    } = DetailData.data;

    let styleProps = {
      backgroundImage: `url('${pic}')`
    };
    return (
      <div className="o-page-detail">
        <div className="c-detail-header">
          <span className="c-detail-header-btn iconfont">&#xe697;</span>
          <span className="c-detail-header-btn iconfont">&#xe699;</span>
        </div>
        <div className="c-detail-banner" style={styleProps}>
            <h1 className="c-detail-title">{title}</h1>
            <h3 className="c-detail-subtitle">
                <span className="c-detail-author">{authorsName}</span>
                <span className="c-spliter">·</span>
                <span className="c-detail-tags">{comicTags.join(' ')}</span>
            </h3>
        </div>
        <div className="c-detail-content">
          <div className="c-detail-info">
            <p>
              {brief}
            </p>
            <p className="c-detail-fav">
              <span><em></em>收藏量 {formatNum(favorites)}</span>
              <span><em></em>点击量 {formatNum(clickCount)}</span>
              <span><em></em>浏览量 {formatNum(total)}</span>
            </p>
          </div>
          <div className="c-detail-newest">
              <p>更新中 <span>{lastUpdateTime} 更新至{episodeCount}话</span></p>
              <img src={lastEpisodeCover} alt=""/>
              <h3>{latestEpisodeTitle}</h3>
          </div>
        </div>
        <div className="c-detail-footer">
            <span>已关注</span>
            <span>续看第19话</span>
        </div>
      </div>
    )
  }
}
