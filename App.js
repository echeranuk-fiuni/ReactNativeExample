import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Button } from 'react-native';
import SessionContextProvider from './src/contexts/SessionContextProvider';
import LoginPage from './src/pages/LoginPage';
import UserFormPage from './src/pages/UserFormPage';
import UserPage from './src/pages/UserPage';
import UsersPage from './src/pages/UsersPage';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <SessionContextProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home'>
                    <Stack.Screen name="Home">
                        {props => (
                            <View>
                                <Text {...props} style={{ color: 'blue' }}>Hola Mundo!</Text>
                                <Button title="Ingresar" onPress={() => props.navigation.navigate("Login")} />
                                <Button title="Ir a usuarios" onPress={() => props.navigation.navigate("Users")} />
                            </View>
                        )}
                    </Stack.Screen>
                    <Stack.Screen name="Users" component={UsersPage} options={{ title: 'Usuarios' }} />
                    <Stack.Screen name="Login" component={LoginPage} options={{ title: 'Ingresar' }} />
                    <Stack.Screen name="User" component={UserPage} options={{ title: 'Datos de Usuario' }} />
                    <Stack.Screen name="UserForm" component={UserFormPage} options={ ({ route }) => ({ title: route?.params?.userName ? `Actualizar ${route?.params?.userName}` : 'Agregar Usuario' }) } />
                </Stack.Navigator>
            </NavigationContainer>
        </SessionContextProvider>
    );
};

export default App;