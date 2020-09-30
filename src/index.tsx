import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.scss';
import { AppComponent } from './App.component';
import { rootReducer } from './redux';
import * as serviceWorker from './serviceWorker';
import 'materialize-css';

const composeEnhancers = composeWithDevTools();
const store = createStore(rootReducer, compose(composeEnhancers));

const app: JSX.Element = (
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <AppComponent />
            </BrowserRouter>
        </Provider>
    </StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
