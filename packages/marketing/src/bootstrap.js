import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Mount function to start ap
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// if in dev and in isolation call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}

//else we are running thorugh container export mount function to be run by container
export { mount };
