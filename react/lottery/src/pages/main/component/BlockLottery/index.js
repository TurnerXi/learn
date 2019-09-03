import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './BlockLottery.css'
export default class BlockLottery extends Component {

  renderIcon(href, title, icon, flag) {
    return (
      <Link to={href||''} title={title} className="c-icon">
        <div className="c-icon-wrapper">
            <i className="c-icon-img" style={{backgroundImage:"url("+icon+")"}}></i>
            <h2 className="c-icon-title">{title}</h2>
            {flag?(<img src={flag} alt="" className="c-icon-flag"/>):''}
        </div>
      </Link>
    )
  }

  render() {
    let { data } = this.props;
    return (
      <section className="o-lottery">
      {data.filter(item=>item.is_home==='1').sort((a,b)=>a.lot_order-b.lot_order).map((item,idx) =>
        (<div className="o-lottery-container" key={idx}>
          {this.renderIcon(item.href_url,item.lot_name,item.icon_path,item.angle_path)}
        </div>))
      }
      <div className="o-lottery-container">
        {this.renderIcon('/main/more',"更多彩种","http://leyou.g0-xiaomicp.com/android_asset/www/v3.0/images/czlogo/icon_czlogo_zk.png")}
      </div>
      </section>
    )
  }
}
