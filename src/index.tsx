import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'materialize-css';
import './index.scss';
import { AppComponent } from './App.component';
import { store } from './redux';
import * as serviceWorker from './serviceWorker';

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
