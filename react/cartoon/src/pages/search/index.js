import React, { Component } from 'react';
import LazyImage from '../../assets/components/lazyimage';
import './index.css';
import Result from './result.json';
import Suggest from './suggest.json';
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      suggest: [],
      result: [],
      history: [1]
    }
  }
  render() {
    let { result } = this.state;
    return (
      <div className="o-page-search">
        <div className="c-search">
          <div className="c-search-wrapper">
            <input type="text" placeholder="漫画" onChange={this.onChangeEvent.bind(this)} value={this.state.search} />
            {this.state.search && (<span className="c-search-clear iconfont" onClick={this.clearSearch.bind(this)}>&#xe69a;</span>)}
          </div>
          <span className="c-search-btn" onClick={() => { this.props.history.goBack() }}>取消</span>
        </div>
        <div className="c-search-container">
          {this.searchContent()}
          <div className="c-search-result-list">
            {result.map((item,idx) => <SeachResults {...item.albumDocInfo.comics}  key={idx}/>)}
          </div>
        </div>
      </div>
    )
  }
  onChangeEvent(e) {
    let search = e.target.value;
    let suggest = search ? Suggest : null;
    this.setState({ search, suggest, result: [] });
  }

  doSearchEvent(search) {
    let result = search ? Result : null;
    this.setState({ result, suggest: [] });
  }

  clearHistory() {
    this.setState({ history: [] });
  }

  clearSearch() {
    this.setState({ search: '', result: [] });
  }

  searchContent() {
    if (!this.state.search) {
      return this.searchTips();
    } else if (this.state.suggest.length > 0) {
      return this.searchSuggests();
    }
  }

  searchSuggests() {
    return (
      <div className="c-search-suggest">
        <ul className="c-search-suggest-list">
          {this.state.suggest.map(item => (<li key={item.name} onClick={this.doSearchEvent.bind(this, item.name)}>{item.name}</li>))}
        </ul>
      </div>
    )
  }

  searchTips() {
    return (
      <div className="c-search-tips">
        {this.searchHot()}
        {this.state.history.length > 0 ? this.searchHistory() : ''}
      </div>
    );
  }

  searchHistory() {
    return (
      <div className="c-search-tips-wrapper">
        <h5>搜索历史<span className="c-search-tips-del" onClick={this.clearHistory.bind(this)}></span></h5>
        <ul className="c-search-tips-list">
          <li rseat="大主宰"> 大主宰 </li>
          <li rseat="地错2"> 地错2</li>
        </ul>
      </div>
    );
  }

  searchHot() {
    return (
      <div className="c-search-tips-wrapper">
        <h5>热门搜索</h5>
        <ul className="c-search-tips-list">
          <li rseat="斗罗大陆">斗罗大陆<span className="c-search-tag c-search-tag-hot"></span></li>
          <li rseat="航海王">航海王<span className="c-search-tag c-search-tag-hot"></span></li>
          <li rseat="王牌校草">王牌校草<span className="c-search-tag c-search-tag-hot"></span></li>
          <li rseat="天价宠妻总裁夫人休想逃">天价宠妻总裁夫人休想逃<span className="c-search-tag c-search-tag-recom"></span></li>
          <li rseat="斗罗大陆番外篇">斗罗大陆番外篇<span className="c-search-tag c-search-tag-new"></span></li>
          <li rseat="帝少专宠霸道妻">帝少专宠霸道妻<span className="c-search-tag c-search-tag-new"></span></li>
          <li rseat="我的血族大人">我的血族大人<span className="c-search-tag c-search-tag-recom"></span></li>
          <li rseat="少帅每天都在吃醋">少帅每天都在吃醋<span className="c-search-tag c-search-tag-new"></span></li>
          <li rseat="恶魔专宠：总裁的头号甜妻">恶魔专宠：总裁的头号甜妻<span className="c-search-tag c-search-tag-recom"></span></li>
          <li rseat="少帅你老婆又跑了">少帅你老婆又跑了<span className="c-search-tag c-search-tag-recom"></span></li>
        </ul>
      </div>
    );
  }

}

function SeachResults({ title, image_url, author_name, prompt_description, newest_item_title }) {
  return (
    <div className="c-search-result">
      <div className="c-search-result-img">
        <LazyImage src={image_url} />
      </div>
      <div className="c-search-result-info">
        <h2 className="c-search-result-title">{title}</h2>
        <p className="c-search-result-author fs-10">{author_name}</p>
        <p className="c-search-result-progress fs-10">{newest_item_title}</p>
      </div>
    </div>
  );
}
