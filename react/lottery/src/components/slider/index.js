import React from 'react'
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import './Slider.css'
export default class Slider extends React.Component {
  render() {
    let { data } = this.props;
    return (
      <Carousel autoplay className="c-slider">
        {
          data.map((item,idx) =>(
          <div className="c-clider-item" key={idx}>
            <Link to={item.flash_url}>
              <img className="c-slider-img" src={item.pic_path} alt={item.pic_title}></img>
            </Link>
          </div>) )
        }
      </Carousel>
    )
  }
}
