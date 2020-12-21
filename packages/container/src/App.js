import React from 'react';
import MarketingApp from './Components/MarketingApp';
import Header from './Components/Header';
import { BrowserRouter } from 'react-router-dom';

export default () => {
  return <>
  <Header />
  <MarketingApp />
  </>;
};
