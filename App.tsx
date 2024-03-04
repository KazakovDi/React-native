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
import Svg from 'react-native-svg';
import Pill from './assets/svg/pill.svg';
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
function App(): React.JSX.Element {
  const [storageData, setStorageData] = React.useState([]);
  console.log('storage', storageData);

  const [inputValue, setInputValue] = React.useState('');

  useEffect(() => {
    SplashScreen.hide();
    EncryptedStorage.getItem(Config.FAKE_DATA).then((res: any) => {
      const result = JSON.parse(res);
      setStorageData(result);
    });
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json));
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
          onPress={async () => {
            const data = [
              ...storageData,
              {
                id: Math.random(),
                text: inputValue,
              },
            ];
            try {
              await EncryptedStorage.setItem(
                Config.FAKE_DATA,
                JSON.stringify(data),
              );
              showMessage({
                type: 'success',
                message: 'Data saved',
              });
            } catch (err) {}
          }}
        />
        <Button
          title={'Clear encrypted storage'}
          onPress={async () => {
            try {
              await EncryptedStorage.clear();
            } catch (err) {}
          }}
        />
        <FlatList
          data={storageData}
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
      </SafeAreaView>
    </LinearGradient>
  );
}

export default App;
