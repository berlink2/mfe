import React, { lazy, Suspense, useState, useEffect } from 'react';
import Header from './Components/Header';
import Progress from './Components/Progress';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import {createBrowserHistory} from 'history'
const MarketingLazy = lazy(()=>import('./Components/MarketingApp'));
const AuthLazy = lazy(()=>import('./Components/AuthApp'));
const DashboardLazy = lazy(()=>import('./Components/DashboardApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})

const history = createBrowserHistory()

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(()=>{
    if (isSignedIn) {
      history.push('/dashboard');
    }
  },[isSignedIn])
  return <Router history={history}>
  <StylesProvider generateClassName={generateClassName}>
    <div>
      <Header 
      onSignOut={()=>setIsSignedIn(false)}
      isSignedIn={isSignedIn}/>
      <Suspense fallback={<Progress />}>
      <Switch>
        <Route path="/auth" >
          <AuthLazy onSignIn={()=>setIsSignedIn(true)}/>
        </Route>
        <Route path="/dashboard">
        {!isSignedIn && <Redirect to="/"/>}
          <DashboardLazy />
        </Route>
        <Route path="/" component={MarketingLazy}>
          <MarketingLazy onSignIn={()=>setIsSignedIn(true)}/>
        </Route>
      </Switch>
      </Suspense>
    </div>
  </StylesProvider>
  </Router>
};
