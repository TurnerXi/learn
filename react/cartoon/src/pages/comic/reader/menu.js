import React, { Component } from 'react';
import { mergeClassName } from '../../../utils/dom';
import Lists from '../../../assets/components/lists';
import ListItem from '../../../assets/components/lists/list-item';
export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { order: 1 };
  }
  render() {
    let { order } = this.state;
    let { serializeStatus, episodeCount, episodes, current, className: clzName, activeClassName } = this.props;
    // comicId,
    let title = ['已完结', '连载中'].indexOf(serializeStatus - 1);
    let subtitle = serializeStatus === 1 ? `全${episodeCount}话` : `更新至${episodeCount}话`;
    return (
      <div className={mergeClassName('c-menu',clzName)}>
        <div className="c-menu__header">
            <h2 className="c-menu__title">{title}</h2>
            <span className="c-menu__subtitle">{subtitle}</span>
            <span className="c-menu__tools">
              { order ? (<span>正序<em className="c-icon--ascending"></em></span>) : (<span>倒序<em className="c-icon--descending"></em></span>) }
            </span>
        </div>
        <div className="c-menu__content">
          <Lists>
            {
              episodes && episodes.map(({ episodeTitle, episodeOrder,episodeId }) => {
                return <ListItem key={episodeId} isActive={current===episodeId} activeClassName={activeClassName}>{episodeOrder} {episodeTitle}</ListItem>;
              })
            }
          </Lists>
        </div>
      </div>
    )
  }
}
