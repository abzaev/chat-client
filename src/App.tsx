import React, { useEffect } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
// import logo from './logo.svg';
import './App.css';
import { AppState } from './types';
import { TabsPanel } from './containers/Tabs';
import Login from './containers/Login';
import { authCreator } from './store/auth/actionCreators';

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: AppState) => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(authCreator());
  }, [dispatch])

  let routes = (
    <Switch>
      <Route path={'/'} exact component={Login} />
      <Redirect to={'/'} />
    </Switch>
  );

  if (isAuthenticated) {
    routes = (
      <Switch>
        <Route path={'/'} exact component={TabsPanel} />
      </Switch>
    )
  }

  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default withRouter(App);
