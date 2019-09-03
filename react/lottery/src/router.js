import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Main from './pages/main'
import Find from './pages/find'
import My from './pages/my'
export default function Router() {
  return (
    <HashRouter>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route path="/find" component={Find}></Route>
          <Route path="/my" component={My}></Route>
        </Switch>
    </HashRouter>
  );
}
