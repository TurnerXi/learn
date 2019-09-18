import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import DetailData from './detail.json';
import { formatNum } from '../../../utils/number';
import { formatDate } from '../../../utils/date';
import './index.css';
export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = { isCollect: false };
  }

  toggleCollectEvent() {
    this.setState({ isCollect: !this.state.isCollect });
  }

  render() {
    let { id } = this.props.match.params;
    let { isCollect } = this.state;
    let {
      pic,
      title,
      authorsName,
      comicTags,
      favorites,
      clickCount,
      brief,
      firstEpisodeId,
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
          <h1 className="c-detail-banner-title">{title}</h1>
          <h3 className="c-detail-banner-subtitle">
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
              <span><em className="c-detail-tag c-tag-collect"></em>收藏量 {formatNum(favorites)}</span>
              <span><em className="c-detail-tag c-tag-hot"></em>人气 {formatNum(total)}</span>
              <span><em className="c-detail-tag c-tag-comment"></em>点击量 {formatNum(clickCount)}</span>
            </p>
          </div>
          <div className="c-detail-newest">
            <div className="c-detail-title-wrapper">
              <h2 className="c-detail-title mr-1">更新中</h2>
              <span className="c-detail-subtitle">{formatDate(lastUpdateTime, 'yyyy.MM.dd')} 更新至{episodeCount}话</span>
              <span className="c-detail-showall iconfont">全部&#xe6a7;</span>
            </div>
            <div className="c-detail-newest-chapter">
              <img src={lastEpisodeCover} alt="" />
              <span>{latestEpisodeTitle}</span>
            </div>
          </div>
        </div>
        <div className="c-detail-footer">
          <span className={isCollect?'c-detail-footer-left active':'c-detail-footer-left'} onClick={this.toggleCollectEvent.bind(this)}>
            <em className="c-detail-tag c-tag-footer-collect"></em>
            <span>{isCollect?'已关注':'关注'}</span>
          </span>
          <span onClick={()=>{this.props.history.push(`/comic/reader/${id}/${firstEpisodeId}`)}} className="c-detail-footer-right">续看第19话</span>
        </div>
      </div>
    )
  }
}
