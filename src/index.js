import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './Store/Store'
import { Provider } from 'react-redux'
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory as history} from 'history';
import ErrorBoundary from './Components/Module/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router history={history}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Router>
  </Provider>
);