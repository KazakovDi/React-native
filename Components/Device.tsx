import React from 'react';
import {View, Text} from 'react-native';
import DeviceInfo from 'react-native-device-info';
const Device = () => {
  const brand = DeviceInfo.getBrand();
  const device = DeviceInfo.getModel();
  console.log('Device', device);
  return (
    <View>
      <Text style={{fontWeight: 700, fontSize: 26}}>Device info:</Text>
      <Text> {brand + ' ' + device}</Text>
    </View>
  );
};

export default Device;
