import React from 'react';
import Api from 'network/apis/main'
import Header from 'components/header';
import Slider from 'components/slider';
import BlockLottery from './component/BlockLottery'
import BlockOpr2 from './component/BlockOpr2'
import './Main.css';
export default class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = { icons: [], banners: [], news: [] };

  }

  componentDidMount() {
    this.requestLotteryIcons();
    this.requestBanners();
  }

  async requestLotteryIcons() {
    let response = await Api.getLotteryIcons();
    if (response.flag === '1') {
      this.setState({ icons: response.msg.data });
    }
  }

  async requestBanners() {
    let response = await Api.getBanners();
    if (response.flag === '1') {
      this.setState({ banners: response.msg.banner, news: response.msg.news });
    }
  }

  render() {
    let { banners, icons, news } = this.state;
    return (
      <div className="u-pdt375">
        <Header title="天天红单"></Header>
        <Slider data={banners}></Slider>
        <BlockLottery data={icons}></BlockLottery>
        <BlockOpr2 news={news}></BlockOpr2>
      </div>
    );
  }
}
