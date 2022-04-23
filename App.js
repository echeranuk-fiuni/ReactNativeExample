import React from 'react';
import { View } from 'react-native';
import SessionContextProvider from './src/contexts/SessionContextProvider';
import LoginPage from './src/pages/LoginPage';
import UsersPage from './src/pages/UsersPage';

const App = () => {
    return (
        <SessionContextProvider>
            <View>
                <LoginPage />
                <UsersPage />
            </View>
        </SessionContextProvider>
    );
};

export default App;