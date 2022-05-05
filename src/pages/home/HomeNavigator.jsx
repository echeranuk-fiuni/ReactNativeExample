import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './HomePage';
import HelpPage from './HelpPage';
import ContactPage from './ContactPage';
import FiuniScreen from '../../components/FiuniScreen';

const Tab = createBottomTabNavigator();

const HomeNavigator = props => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Index" component={props => <FiuniScreen component={HomePage} {...props} />} options={ { headerShown: false } } />
            <Tab.Screen name="Help" component={props => <FiuniScreen component={HelpPage} {...props} />} options={ { headerShown: false } } />
            <Tab.Screen name="Contact" component={props => <FiuniScreen component={ContactPage} {...props} />} options={ { headerShown: false } } />
        </Tab.Navigator>
    );
};

export default HomeNavigator;