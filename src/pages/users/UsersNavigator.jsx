import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import UserFormPage from './UserFormPage';
import UserPage from './UserPage';
import UsersPage from './UsersPage';

const Stack = createNativeStackNavigator();

const UsersNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='List'>
            <Stack.Screen name="List" component={UsersPage} options={ { headerShown: false } } />
            <Stack.Screen name="Show" component={UserPage} options={ { headerShown: false } } />
            <Stack.Screen name="Form" component={UserFormPage} options={ { headerShown: false } } />
        </Stack.Navigator>
    );
};

export default UsersNavigator;