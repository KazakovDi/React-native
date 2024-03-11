import React from 'react';
import Geolocation from '@react-native-community/geolocation';
import MyButton from './MyButton';
import {ThemeContext} from '../App';
import {useContext} from 'react';
const Geoloc = () => {
  const styles = useContext(ThemeContext);
  Geolocation.setRNConfiguration({
    skipPermissionRequests: true,
    authorizationLevel: 'whenInUse',
    locationProvider: 'android',
  });
  return (
    <MyButton
      color={styles.text.opposite}
      bgColor={styles.bgSecondary.color}
      onPress={() => {
        Geolocation.requestAuthorization(() => {
          console.log('success');
        });
        Geolocation.getCurrentPosition(info => console.log('info', info));
      }}
      title="Geoloc"
    />
  );
};

export default Geoloc;
