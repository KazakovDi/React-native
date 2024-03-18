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
import Share from 'react-native-share';
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
import Clip from './Components/Clip';
import Calendar from './Components/Calendar';
import Guide from './Components/Guide';
import TooltipComponent from './Components/TooltipComponent';
import {CopilotProvider} from 'react-native-copilot';
import Geoloc from './Components/Geoloc';
import WebViewComponent from './Components/WebViewComponent';
import {Provider, useSelector, useDispatch} from 'react-redux';
import LangSwitch from './Components/LangSwitch';
import store from './Stores/ReduxStore';
import Conection from './Components/Conection';
import Biometrics from './Components/Biometrics';
import Counter from './Components/Counter';
import Notif from './Components/Notif';
import RenderHtml from 'react-native-render-html';
export const ThemeContext = createContext({});

const App = observer((): React.JSX.Element => {
  const source = {
    html: `
  <a href={https://www.google.com} style='color:red;'>
    Hello World!
  </a>`,
  };
  EStyleSheet.build(MobXStore.themeProps.styles);
  const styles = EStyleSheet.create({
    ...MobXStore.themeProps.mask,
    tooltip: {
      backgroundColor: 'rgb(0,18,32)',
      color: '#fff',
    },
  });
  useEffect(() => {
    SplashScreen.hide();
    MobXStore.GetData();
  }, []);
  return (
    <Provider store={store}>
      <LinearGradient colors={MobXStore.themeProps.styles.$bgGradient}>
        <SafeAreaView style={{height: '100%'}}>
          <ThemeContext.Provider value={styles}>
            <Text style={{color: styles.text.color}}>
              {new Intl.DateTimeFormat('ru-RU', {
                dateStyle: 'full',
                timeStyle: 'medium',
              }).format(MobXStore.date)}
            </Text>
            <Biometrics />
            {/* <RenderHtml source={source} /> */}
            {/* <MyButton
            title={'Guide'}
            onPress={() => start()}
            color={styles.text.opposite}
            bgColor={styles.bgSecondary.color}
          /> */}
            <Clip value={'124'} />
            <GradientText />
            {/* <FlashMsg /> */}
            <CopilotProvider
              arrowColor={'red'}
              overlay="svg"
              backdropColor="rgba(0,18,32,0.8)"
              verticalOffset={26}
              tooltipStyle={styles.tooltip}
              tooltipComponent={TooltipComponent}>
              <Guide />
            </CopilotProvider>
            <Conection />
            <LangSwitch />
            <Counter />
            <Notif />
            {/* <EncryptedStorageHandler /> */}
            {/* <Device /> */}
            {/* <ContactsList /> */}
            {/* <Calendar />
          <MyButton
            title={'Change theme'}
            onPress={() => MobXStore.switchTheme()}
            color={styles.text.opposite}
            bgColor={styles.bgSecondary.color}
          />
          <WebViewComponent />
          <Geoloc /> */}
            <MyLists />
            {MobXStore.media.type === 'img' ? (
              <>
                <Image
                  source={{uri: MobXStore.media.uri}}
                  style={{width: '100%', height: 350}}
                />
                <MyButton
                  color={styles.text.opposite}
                  bgColor={styles.bgSecondary.color}
                  title={'Share'}
                  onPress={() => {
                    Share.open({
                      title: 'My media ',
                      message: 'Check this out:',
                      url: MobXStore.media.uri,
                    });
                  }}
                />
              </>
            ) : MobXStore.media.type === 'vid' ? (
              <>
                <Text style={styles.text.color}>{MobXStore.media.uri}</Text>
                <MyButton
                  color={styles.text.opposite}
                  bgColor={styles.bgSecondary.color}
                  title={'Share'}
                  onPress={() => {
                    Share.open({
                      title: 'My media ',
                      message: 'Check this out:',
                      url: MobXStore.media.uri,
                    });
                  }}
                />
              </>
            ) : null}
            <Camera />
          </ThemeContext.Provider>
        </SafeAreaView>
      </LinearGradient>
    </Provider>
  );
});

export default App;
