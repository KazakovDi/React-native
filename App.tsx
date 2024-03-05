/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useRef} from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  View,
  FlatList,
  SectionList,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import SplashScreen from 'react-native-splash-screen';
import FlashMessage, {showMessage} from 'react-native-flash-message';
import Config from 'react-native-config';
import EncryptedStorage from 'react-native-encrypted-storage';
import ListItem from './Components/ListItem';
import Svg, {Circle} from 'react-native-svg';
import Pill from './assets/svg/pill.svg';
import {observer} from 'mobx-react-lite';
import MobXStore from './Stores/MobxStore';
import RBSheet from '@poki_san/react-native-bottom-sheet';

import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedProps,
  withSequence,
  withRepeat,
  Easing,
  ReduceMotion,
} from 'react-native-reanimated';
const sectionData = [
  {
    title: 'Tasty food',
    data: ['Pizza', 'Burger', 'Potato'],
    key: 1,
  },
  {
    title: 'Japanese',
    data: ['Rolls', 'Salmon'],
    key: 2,
  },
  {
    title: 'Drinks',
    data: ['Water', 'Pepsi', 'Fanta'],
    key: 3,
  },
];
const App = observer((): React.JSX.Element => {
  const [inputValue, setInputValue] = React.useState('');
  const circleValues = useSharedValue({cx: 200, cy: 100});
  const bottomSheetRef = useRef();
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);
  const handleAnimate = () => {
    circleValues.value = withSequence(
      withTiming(
        {
          cx: 270,
          cy: 100,
        },
        {duration: 870, easing: Easing.exp, reduceMotion: ReduceMotion.System},
      ),
      withRepeat(withTiming({cx: 250, cy: 125}, {duration: 500}), 5, true),
    );
    // circleValues.value.cx = 150;
  };
  const animatedProps = useAnimatedProps(() => {
    return {
      cx: circleValues.value.cx,
      cy: circleValues.value.cy,
    };
  });
  console.log('store', MobXStore.store);
  useEffect(() => {
    SplashScreen.hide();
    MobXStore.GetData();
  }, []);
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
        <FlashMessage animationDuration={500} position="top" />
        <Button
          title="Show flash message"
          onPress={() => {
            showMessage({
              type: 'info',
              message: 'Flash message',
              backgroundColor: 'white',
              color: '#000',
              icon: () => (
                <View style={{marginRight: 5}}>
                  <Svg width={15} height={15}>
                    <Pill width={15} height={15} />
                  </Svg>
                </View>
              ),
            });
          }}
        />
        <TextInput
          style={{borderWidth: 1, borderColor: '#000'}}
          onChangeText={text => setInputValue(text)}
          value={inputValue}
        />
        <Button
          title={'Save to encrypted storage'}
          onPress={() => {
            MobXStore.saveToStorage('FAKE_DATA', {
              id: Math.random(),
              text: inputValue,
            });
          }}
        />
        <Button
          title={'Clear encrypted storage'}
          onPress={async () => {
            MobXStore.clearStorage();
          }}
        />
        <Svg width={400} height={200}>
          <AnimatedCircle
            cx={circleValues.value.cx}
            cy={circleValues.value.cy}
            r={10}
            fill="white"
            stroke="#000"
            animatedProps={animatedProps}
          />
        </Svg>
        <Button title="Animate size" onPress={handleAnimate} />
        <FlatList
          data={MobXStore.store['FAKE_DATA']}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({item}) => <ListItem text={item.text} />}
        />
        <SectionList
          sections={sectionData}
          renderSectionHeader={({section: {title}}) => <Text>{title}</Text>}
          renderItem={({item}) => (
            <View
              style={{marginLeft: 5, backgroundColor: '#000', color: '#fff'}}>
              <Text style={{color: '#fff'}}>{item}</Text>
            </View>
          )}
        />
        <RBSheet
          animationType="slide"
          openDuration={500}
          closeOnDragDown={true}
          dragFromTopOnly={true}
          customStyles={{
            draggableIcon: {
              backgroundColor: 'red',
            },
          }}
          ref={bottomSheetRef}>
          <View>
            <Text>Some important text</Text>
          </View>
        </RBSheet>
        <Button
          title="Show bottom sheet"
          onPress={() => bottomSheetRef.current.open()}
        />
      </SafeAreaView>
    </LinearGradient>
  );
});

export default App;
