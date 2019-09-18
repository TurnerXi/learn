import React, { Component } from 'react';
export default class List extends Component {
  render() {
    let { list } = this.props.data;
    return (
      <ul className="c-list">
        {
          list.map((item) => (
            <li className="c-list__item">{item}</li>
          ))
        }
      </ul>
    )
  }
}
