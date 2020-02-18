import React from 'react';
import {View, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.navigate('Main')} title="Home Page" />
    </View>
  );
};

export default HomeScreen;
