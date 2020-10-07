import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.style.scss';
import { IAppProps } from './App.interface';
import { connector } from './App.service';
import { FooterComponent } from './components/footer/Footer.component';
import { HeaderComponent } from './components/header/Header.component';
import { SignInComponent } from './components/auth/SignIn.component';
import { SignUpComponent } from './components/auth/SignUp.component';
import { ConfirmEmailComponent } from './components/confirm/ConfirmEmail.component';
import { ConfirmedEmailComponent } from './components/confirm/ConfirmedEmail.component';
import { HomeComponent } from './components/home/Home.component';
import { DashboardComponent } from './pages/dashboard/Dashboard.page';

const NoMatch: React.FC = () => <h3>No Match</h3>;

export const AppComponent = connector(({ authState, autoLogin }: IAppProps) => {
    useEffect(() => {
        autoLogin();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="app">
            <HeaderComponent />
            <div className="app__content">
                <Switch>
                    <Route exact path={'/'} component={HomeComponent} />
                    {authState.isAuth && <Route path={'/dashboard'} component={DashboardComponent} />}
                    {!authState.isAuth && <Route path={'/auth/sign-in'} component={SignInComponent} />}
                    {!authState.isAuth && <Route path={'/auth/sign-up'} component={SignUpComponent} />}
                    <Route path={'/confirm'} component={ConfirmEmailComponent} />
                    <Route path={'/confirm-email/:token'} component={ConfirmedEmailComponent} />
                    <Route path={'*'} component={NoMatch} />
                </Switch>
            </div>
            <FooterComponent />
        </div>
    );
});
