import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.scss';
import 'materialize-css';

import { CategoriesListComponent } from './components/category/CategoriesList.component';
import { FooterComponent } from './components/footer/Footer.component';
import { HeaderComponent } from './components/header/Header.component';
import { SignInComponent } from './components/auth/SignIn.component';
import { SignUpComponent } from './components/auth/SignUp.component';
import { ConfirmEmailComponent } from './components/confirm/ConfirmEmail.component';
import { ConfirmedEmailComponent } from './components/confirm/ConfirmedEmail.component';
import { HomeComponent } from './components/home/Home.component';

const NoMatch: React.FC = () => <h3>No Match</h3>;

export const App: React.FC = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <HeaderComponent />
                <div className="homepage-content-wrap">
                    <Switch>
                        <Route exact path={'/'} component={HomeComponent} />
                        <Route exact path={'/dashboard'} component={CategoriesListComponent} />
                        <Route exact path={'/auth/sign-in'} component={SignInComponent} />
                        <Route exact path={'/auth/sign-up'} component={SignUpComponent} />
                        <Route exact path={'/confirm'} component={ConfirmEmailComponent} />
                        <Route path={'/confirm-email/:token'} component={ConfirmedEmailComponent} />
                        <Route path={'*'} component={NoMatch} />
                    </Switch>
                </div>
                <FooterComponent />
            </BrowserRouter>
        </div>
    );
};
