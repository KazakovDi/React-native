import React from 'react';
import {View, Text} from 'react-native';
import Device from './Device';
import Conection from './Conection';
import Biometrics from './Biometrics';

const BottomSection = () => {
  return (
    <View>
      <Text style={{fontSize: 22, color: '#000', fontWeight: 700}}>
        Device-Network info
      </Text>
      <Biometrics />
      <Device />
      <Conection />
    </View>
  );
};

export default BottomSection;
