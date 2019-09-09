import React, { Component } from 'react';
import './index.css';
import Result from './result.json';
import Suggest from './suggest.json';
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      suggest: [],
      result: []
    }
  }
  render() {
    let { result } = this.state;
    return (
      <div className="o-page-search">
        <div className="c-search">
          <span className="c-backbtn iconfont" onClick={() => this.props.history.goBack()}>&#xe697;</span>
          <div className="c-search-wrapper">
            <input type="text" placeholder="漫画" onInput={this.onInputEvent.bind(this)} />
          </div>
          <span className="c-search-btn" onClick={this.doSearchEvent.bind(this)}>搜索</span>
        </div>
        <div className="c-search-container">
          {this.searchContent()}
          <div className="c-search-result">
            {
              result.map((item) => {
                let { title, image_url, author_name, prompt_description, newest_item_title } = item.albumDocInfo.comics;
                return (
                  <div className="c-search-item" key={title}>
                    <div className="c-search-item-img">
                      <img src={image_url} alt={title} />
                    </div>
                    <div className="c-search-item-info">
                      <h2 className="c-search-item-title">{title}</h2>
                      <p className="c-search-item-author">{author_name}</p>
                      <p className="c-search-item-progress">{newest_item_title}</p>
                      <p className="c-search-item-desc">{prompt_description}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
  onInputEvent(e) {
    let search = e.target.value;
    let suggest = search ? Suggest : null;
    this.setState({ search, suggest });
  }

  doSearchEvent() {
    let result = this.state.search ? Result : null;
    this.setState({ result });
  }

  searchContent() {
    if (!this.state.search) {
      return (
        <div className="c-search-hot">
          <h5>热门搜索</h5>
          <ul className="list">
            <li className="cell" rseat="斗罗大陆"> 斗罗大陆 </li>
            <li className="cell" rseat="航海王"> 航海王 </li>
            <li className="cell" rseat="天价宠妻总裁夫人休想逃"> 天价宠妻总裁夫人休想逃 </li>
            <li className="cell" rseat="王牌校草"> 王牌校草 </li>
            <li className="cell" rseat="斗罗大陆番外篇"> 斗罗大陆番外篇 </li>
            <li className="cell" rseat="帝少专宠霸道妻"> 帝少专宠霸道妻 </li>
            <li className="cell" rseat="我的血族大人"> 我的血族大人 </li>
            <li className="cell" rseat="少帅每天都在吃醋"> 少帅每天都在吃醋 </li>
            <li className="cell" rseat="恶魔专宠：总裁的头号甜妻"> 恶魔专宠：总裁的头号甜妻 </li>
            <li className="cell" rseat="少帅你老婆又跑了"> 少帅你老婆又跑了 </li>
          </ul>
        </div>
      );
    } else if (this.state.suggest.length > 0) {
      return (
        <div className="c-search-suggest">
          <ul className="c-search-suggest-list">
            {
              this.state.suggest.map(item => (
                <li key={item.name}>{item.name}</li>
              ))
            }
          </ul>
        </div>
      );
    }
  }

}

