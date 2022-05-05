import React from 'react';
import { View, Text, Button } from 'react-native';

const ContactPage = props => {
    return (
        <View>
            <Text {...props} style={{ color: 'blue' }}>Esta es la pagina de contacto</Text>
        </View>
    );
};

export default ContactPage;