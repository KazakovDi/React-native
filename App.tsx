/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useRef} from 'react';
import {Text, ScrollView, View, Image, Switch} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import SplashScreen from 'react-native-splash-screen';
import {observer} from 'mobx-react-lite';
import MobXStore from './Stores/MobxStore';
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
import Biometrics from './Components/Biometrics';
import Counter from './Components/Counter';
import Notif from './Components/Notif';
import RenderHtml from 'react-native-render-html';
import SectionDevider from './Components/SectionDevider';
import BottomSection from './Components/BottomSection';
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
      <LinearGradient
        style={{flex: 1}}
        colors={MobXStore.themeProps.styles.$bgGradient}>
        <SafeAreaView style={{flex: 1}}>
          <ScrollView>
            <ThemeContext.Provider value={styles}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Calendar />
                <LangSwitch />

                <Switch
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  thumbColor={
                    MobXStore.theme === 'light' ? '#f5dd4b' : '#f4f3f4'
                  }
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={() => MobXStore.switchTheme()}
                  value={MobXStore.theme === 'light'}
                />
              </View>

              <Biometrics />
              <RenderHtml source={source} />
              <Clip value={'124'} />
              <GradientText />
              <FlashMsg />
              <CopilotProvider
                arrowColor={'red'}
                overlay="svg"
                backdropColor="rgba(0,18,32,0.8)"
                verticalOffset={54}
                tooltipStyle={styles.tooltip}
                tooltipComponent={TooltipComponent}>
                <Guide />
              </CopilotProvider>

              <Counter />
              <Notif />
              {/* <EncryptedStorageHandler /> */}

              {/* <ContactsList /> */}

              <WebViewComponent />
              <Geoloc />
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
              <BottomSection />
            </ThemeContext.Provider>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </Provider>
  );
});

export default App;
