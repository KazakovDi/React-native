import React from 'react';
import {View, Text} from 'react-native';
import Device from './Device';
import Conection from './Conection';

const BottomSection = () => {
  return (
    <View>
      <Text>Device-Network info</Text>
      <Device />
      <Conection />
    </View>
  );
};

export default BottomSection;
