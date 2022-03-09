import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
} from 'react-router-dom';
import {
  Provider,
} from 'react-redux';
import {
  PersistGate,
} from 'redux-persist/integration/react';
import AppRoutes from './components/AppRoutes';
import reportWebVitals from './reportWebVitals';
import {
  persistor,
  store,
} from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
