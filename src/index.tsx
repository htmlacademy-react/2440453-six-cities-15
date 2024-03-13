import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { OFFERS_LIST } from './mocks';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const offerList = OFFERS_LIST;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offerList={offerList}/>
    </Provider>
  </React.StrictMode>
);
