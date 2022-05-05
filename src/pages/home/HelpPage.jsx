import React from 'react';
import { View, Text, Button } from 'react-native';

const HelpPage = props => {
    return (
        <View>
            <Text {...props} style={{ color: 'blue' }}>Esta es la pagina de ayuda</Text>
            <Text>{props.route?.params?.text}</Text>
        </View>
    );
};

export default HelpPage;