import React from 'react';
import { View, Text, Button } from 'react-native';

const HomePage = props => {
    return (
        <View>
            <Text {...props} style={{ color: 'blue' }}>Hola Mundo!</Text>
            <Button title="Ingresar" onPress={() => props.navigation.navigate("Login")} />
            <Button title="Ir a usuarios" onPress={() => props.navigation.navigate("Users", { screen: 'List'})} />
        </View>
    );
};

export default HomePage;