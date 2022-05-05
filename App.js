import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import SessionContextProvider from './src/contexts/SessionContextProvider';
import HomeNavigator from './src/pages/home/HomeNavigator';
import LoginPage from './src/pages/LoginPage';
import { createDrawerNavigator } from '@react-navigation/drawer';
import UsersNavigator from './src/pages/users/UsersNavigator';

const Drawer = createDrawerNavigator();

const getHeaderTitle = route => {
    const routeName = route?.name ?? 'Home';
    console.log('Route', routeName, route);
    switch (routeName) {
        case 'List':
            return 'Usuarios';
        case 'Show':
            return 'Datos de Usuario';
        case 'Form':
            return route?.params?.userName ? `Actualizar ${route?.params?.userName}` : 'Agregar Usuario';
    }
};

const App = () => {
    return (
        <SessionContextProvider>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName='Home'>
                    <Drawer.Screen name="Home" component={HomeNavigator} options={{ title: 'Principal' }} />
                    <Drawer.Screen
                        name="Users"
                        component={UsersNavigator}
                        options={({ route }) => ({
                            headerTitle: getHeaderTitle(route),
                            title: 'Usuarios'
                        })} />
                    <Drawer.Screen name="Login" component={LoginPage} options={{ title: 'Ingresar' }} />
                </Drawer.Navigator>
            </NavigationContainer>
        </SessionContextProvider>
    );
};

export default App;