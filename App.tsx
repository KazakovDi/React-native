/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useRef} from 'react';
import {SafeAreaView, Text, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SplashScreen from 'react-native-splash-screen';
import {observer} from 'mobx-react-lite';
import MobXStore from './Stores/MobxStore';
import Device from './Components/Device';

import NetInfo from '@react-native-community/netinfo';
import EStyleSheet from 'react-native-extended-stylesheet';
import FlashMsg from './Components/FlashMsg';
import GradientText from './Components/GradientText';
import Camera from './Components/Camera';
import MobxStore from './Stores/MobxStore';
import MyButton from './Components/MyButton';
import {createContext} from 'react';
import EncryptedStorageHandler from './Components/EncryptedStorageHandler';
import MyLists from './Components/MyLists';
import ContactsList from './Components/ContactsList';
export const ThemeContext = createContext({});
const App = observer((): React.JSX.Element => {
  EStyleSheet.build(MobXStore.themeProps.styles);

  // component: use global variables
  const styles = EStyleSheet.create(MobXStore.themeProps.mask);

  useEffect(() => {
    SplashScreen.hide();
    MobXStore.GetData();
  }, []);
  return (
    <LinearGradient colors={MobXStore.themeProps.styles.$bgGradient}>
      <SafeAreaView style={{height: '100%'}}>
        <ThemeContext.Provider value={styles}>
          <GradientText />
          <FlashMsg />
          <EncryptedStorageHandler />
          <Device />
          <ContactsList />
          <MyButton
            title={'Change theme'}
            onPress={() => MobXStore.switchTheme()}
            color={styles.text.opposite}
            bgColor={styles.bgSecondary.color}
          />
          <MyLists />
          {MobXStore.media.type === 'img' ? (
            <Image
              source={{uri: MobXStore.media.uri}}
              style={{width: '100%', height: 350}}></Image>
          ) : MobXStore.media.type === 'vid' ? (
            <Text style={styles.text.color}>{MobXStore.media.uri}</Text>
          ) : null}
          <Camera />
        </ThemeContext.Provider>
      </SafeAreaView>
    </LinearGradient>
  );
});

export default App;
