import React from 'react';
import {View, Text} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {useContext} from 'react';
import {ThemeContext} from '../App';
const Device = () => {
  const brand = DeviceInfo.getBrand();
  const device = DeviceInfo.getModel();
  const styles = useContext(ThemeContext);
  return (
    <View>
      <Text style={{color: styles.text.color}}> {brand + ' ' + device}</Text>
    </View>
  );
};

export default Device;
