import React, { Component } from 'react';
import LazyImage from '@/components/lazyimage';
import './index.css';
export default class Fav extends Component {

  render() {
    let list = [
      { img_url: '/iqiyipic/pic/common/lego/20180910/6e8a6f93e21641478dd6fe53a99f8ffa.jpg', title: '今天开始做明星', desc: '明星老姐实力坑弟，弟弟踏上伪娘之路', date: '2019-09-12', newest: '第108话 第八话：约会大作战（18）' },
      { img_url: '/iqiyipic/pic/common/lego/20180929/ac34030e76c54ef09e28b7761e6fc7ee.jpg', title: '妖神记', desc: '当一切重新开始之时命运之轮缓缓转动', date: '2019-09-12', newest: '第280话 第184话可怕的黑金妖兽（下）' },
      { img_url: '/iqiyipic/pic/common/lego/20190708/1fa85ce5878b4a8ebccefb7b3c8439d9.jpg', title: '晴霁何处', desc: '腹黑少爷调教落难公主', date: '2019-09-12', newest: '第22话 第二十话：无辜受冤' },
      { img_url: '/iqiyipic/pic/common/lego/20190705/d60d3bc243e54cfbb3a7f1e49de34980.jpg', title: '无法心动的爱恋', desc: '“星体人”谈恋爱地球会毁灭', date: '2019-09-12', newest: '第24话 第21话 魅惑之瞳' },
    ]
    return (
      <div className="o-page-fav">
        <div className="c-fav-header">
          <h2>关注</h2>
        </div>
        <div className="c-fav-content">
          <ul className="c-fav-list">
            {
              list.map((item, idx) => (<FavItem {...item} key={idx}></FavItem>))
            }
          </ul>
        </div>
      </div>
    )
  }
}

function FavItem({ img_url, title, newest, date, desc }) {
  return (
    <li className="c-fav-item" >
      <div className="c-fav-img">
        <LazyImage src={img_url} alt="" />
        <p className="c-fav-desc"><span>{desc}</span></p>
      </div>
      <div className="c-fav-info">
        <h3 className="c-fav-info-title c-fav-info-title-tag">{title}</h3>
        <div className="c-fav-newest">
          <span>1天前</span>
          <span className="c-fav-spliter">·</span>
          <span>更新至 {newest}</span>
          <span className="c-fav-newest-go">看最新</span>
        </div>
      </div>
    </li>
  );
}
