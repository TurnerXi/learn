import React, { Component } from 'react';
import Detail from './detail';
import Reader from './reader';
import { Switch, Route } from 'react-router-dom';
export default class Comic extends Component {
  render() {
    let { path } = this.props.match;
    return (
      <Switch>
        <Route path={`${path}/detail/:id`} component={Detail}></Route>
        <Route path={`${path}/reader/:id/:page`} component={Reader}></Route>
      </Switch>
    )
  }
}
