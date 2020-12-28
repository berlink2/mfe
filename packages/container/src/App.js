import React, { lazy, Suspense, useState } from 'react';
import Header from './Components/Header';
import Progress from './Components/Progress';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const MarketingLazy = lazy(()=>import('./Components/MarketingApp'));
const AuthLazy = lazy(()=>import('./Components/AuthApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return <BrowserRouter>
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
        <Route path="/" component={MarketingLazy}>
          <MarketingLazy onSignIn={()=>setIsSignedIn(true)}/>
        </Route>
      </Switch>
      </Suspense>
    </div>
  </StylesProvider>
  </BrowserRouter>
};
