import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';

// Mount function to start ap
const mount = (el, {onNavigate, defaultHistory, initialPath}) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath]
  });
  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({pathname: nextPathname}) {
      const { pathname } = history.location;

      if(pathname !== nextPathname) {
        history.push(nextPathname)
      }
    }
  }
};

// if in dev and in isolation call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  if (devRoot) {
    mount(devRoot, {defaultHistory: createBrowserHistory()});
  }
}

//else we are running thorugh container export mount function to be run by container
export { mount };
