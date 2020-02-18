import React from 'react';
import {View, Button} from 'react-native';

const SettingsScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Main')}
        title="Settings Page"
      />
    </View>
  );
};

export default SettingsScreen;
