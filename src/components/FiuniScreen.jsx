import React from 'react';
import { View, Text } from 'react-native';

const FiuniScreen = props => {
    const { component: Component } = props;

    return (
        <View>
            <Component {...props} />
            <Text>Todos los derechos reservados 2022</Text>
        </View>
    );
};

export default FiuniScreen;