import React from 'react';
import NotificationScreen from '../screens/notification.screen';
import BottomNavigation from './bottomNavigator.route';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={BottomNavigation} />
      <Drawer.Screen name="Notifications" component={NotificationScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
