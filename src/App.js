import React from 'react';
import RoutesManager from '../src/setup/routes-manager';
import './App.scss';
import { UserProvider } from './setup/UserContext.js';

function App() {
    return (
        <UserProvider>
            <div className="App">
                <RoutesManager />
            </div>
        </UserProvider>
    );
}

export default App;
