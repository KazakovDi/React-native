import React from 'react';
import Pill from './assets/svg/pill.svg';
import Svg from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
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
import MaskedView from '@react-native-masked-view/masked-view';

const Home = (props: any) => {
  return (
    <View style={{width: '100%', height: 80, backgroundColor: '#fff'}}>
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
      <Button
        title="Go to side page"
        onPress={() => {
          props.navigation.navigate('Side');
        }}
      />
    </View>
  );
};

export default Home;
