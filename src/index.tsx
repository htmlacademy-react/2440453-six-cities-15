import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { OFFERS_LIST } from './consts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const offerList = OFFERS_LIST;

root.render(
  <React.StrictMode>
    <App offerList={offerList}/>
  </React.StrictMode>
);
