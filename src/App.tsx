import React from 'react';

import './App.scss';
import { AuthComponent } from './components/auth/Auth.component';
// import { ActionButtonComponent } from './components/actionButton/ActionButton.component';
// import { CategoriesListComponent } from './components/category/CategoriesList.component';
import { FooterComponent } from './components/footer/Footer.component';
import { HeaderComponent } from './components/header/Header.component';

function App() {
    return (
        <div className="App">
            <HeaderComponent />

            <div className="homepage-content-wrap">
                {/* <CategoriesListComponent /> */}
                {/* <ActionButtonComponent /> */}
                <AuthComponent />
                <FooterComponent />
            </div>
        </div>
    );
}

export default App;
