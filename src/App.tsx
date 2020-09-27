import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.scss';
import 'materialize-css';

import { ActionButtonComponent } from './components/actionButton/ActionButton.component';
import { CategoriesListComponent } from './components/category/CategoriesList.component';
import { FooterComponent } from './components/footer/Footer.component';
import { HeaderComponent } from './components/header/Header.component';
import { SignInComponent } from './components/auth/SignIn.component';
import { SignUpComponent } from './components/auth/SignUp.component';

const NoMatch: React.FC = () => <h3>No Match</h3>;

export const App: React.FC = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <HeaderComponent />
                <div className="homepage-content-wrap">
                    <Switch>
                        <Route exact path={'/'}>
                            <CategoriesListComponent />
                            <ActionButtonComponent />
                        </Route>
                        <Route exact path={'/auth/sign-in'}>
                            <SignInComponent />
                        </Route>
                        <Route exact path={'/auth/sign-up'}>
                            <SignUpComponent />
                        </Route>
                        <Route path={'*'}>
                            <NoMatch />
                        </Route>
                    </Switch>
                </div>
                <FooterComponent />
            </BrowserRouter>
        </div>
    );
};
