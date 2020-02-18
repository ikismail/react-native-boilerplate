import React from 'react';
import HomeScreen from '../screens/home.screen';
import SettingsScreen from '../screens/settings.screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Main">
      <Tab.Screen name="Main" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
