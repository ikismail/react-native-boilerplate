import React from 'react';
import {View, Button} from 'react-native';

const NotificationScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.navigate('Home')} title="Notification Page" />
    </View>
  );
};

export default NotificationScreen;
