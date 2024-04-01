import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const GradientText = () => {
  const localization = useSelector(state => state.localization.localization);
  return (
    <MaskedView
      maskElement={
        <Text style={{fontFamily: 'Roboto-Regular', fontSize: 48}}>
          {localization.gradient}
        </Text>
      }>
      <LinearGradient colors={['rgb(255,86,78)', 'rgb(250,209,38)']}>
        <View style={{width: 60, height: 60}}></View>
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
