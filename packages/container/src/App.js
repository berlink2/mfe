import React, { lazy, Suspense } from 'react';
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
  return <BrowserRouter>
  <StylesProvider generateClassName={generateClassName}>
    <div>
      <Header />
      <Suspense fallback={<Progress />}>
      <Switch>
        <Route path="/auth" component={AuthLazy} />
        <Route path="/" component={MarketingLazy}/>
      </Switch>
      </Suspense>
    </div>
  </StylesProvider>
  </BrowserRouter>
};
