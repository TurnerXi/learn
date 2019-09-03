import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import './Horn.css'
export default class Horn extends Component {
  constructor(props) {
    super(props);
    this.state = { current: 0 };
  }

  componentDidMount() {
    if (this.props.data.length > 0) {
      this.tickHornContent();
    }
  }

  tickHornContent() {
    let idx = 0;
    setInterval(() => {
      if (++idx === this.props.data.length) {
        idx = 0;
      }
      this.setState({ current: idx });
    }, 1500);
  }

  render() {
    let { data } = this.props;
    let { current } = this.state;
    return (
      <div className="c-horn">
          <div className="c-horn-container" >
            {data.map((item,idx) =>
              (
                <CSSTransition in={idx===current} classNames="c-horn-slider" timeout={300}>
                  <Link to={item.href||''} className="c-horn-content">{item.title}</Link>
                </CSSTransition>
              )
            )}
          </div>
      </div>
    )
  }
}
