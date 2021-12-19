import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import createStore from './reducks/store/store';
import * as History from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { Auth0Provider } from '@auth0/auth0-react';

const history = History.createBrowserHistory();
const store = createStore(history);

ReactDOM.render(
  <Auth0Provider
    domain="dev-i4w4aoob.us.auth0.com"
    clientId="LP4zcx79ABl493SMuSwS8IaVVX4DWzPg"
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </Auth0Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
