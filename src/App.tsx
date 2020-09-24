import React from 'react';

import './App.scss';
import { CategoryComponent } from './components/category/Category.component';
import { FooterComponent } from './components/footer/Footer.component';
import { HeaderComponent } from './components/header/Header.component';

function App() {
    return (
        <div className="App">
            <HeaderComponent />

            <div className="row category___list">
                <CategoryComponent />
                <CategoryComponent />
                <CategoryComponent />
                <CategoryComponent />
                <CategoryComponent />
                <CategoryComponent />
                <CategoryComponent />
                <CategoryComponent />
                <CategoryComponent />
                <CategoryComponent />
                <CategoryComponent />
                <CategoryComponent />
            </div>

            <FooterComponent />
        </div>
    );
}

export default App;
