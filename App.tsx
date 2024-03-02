/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import Pill from './assets/svg/pill.svg';
import Svg from 'react-native-svg';
function App(): React.JSX.Element {
  return (
    <LinearGradient
      colors={[
        'rgba(176,198,243, 1)',
        'rgba(102,112,178, 1)',
        'rgba(165,143,215, 1)',
      ]}>
      <SafeAreaView style={{height: '100%'}}>
        <MaskedView
          maskElement={
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 48}}>
              Gradient
            </Text>
          }>
          <LinearGradient colors={['rgb(255,86,78)', 'rgb(250,209,38)']}>
            <View style={{width: 60, height: 60}}></View>
          </LinearGradient>
        </MaskedView>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default App;
