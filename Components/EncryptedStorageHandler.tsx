import React from 'react';
import MobxStore from '../Stores/MobxStore';
import {observer} from 'mobx-react-lite';
import {TextInput} from 'react-native';
import MyLists from './MyLists';
import EStyleSheet from 'react-native-extended-stylesheet';
import MyButton from './MyButton';
import {useContext} from 'react';
import {ThemeContext} from '../App';
const EncryptedStorageHandler = observer(() => {
  const [inputValue, setInputValue] = React.useState('');

  const styles = useContext(ThemeContext);
  return (
    <>
      <TextInput
        style={{borderWidth: 1, borderColor: '#000'}}
        onChangeText={text => setInputValue(text)}
        value={inputValue}
      />
      <MyButton
        title={'Save to encrypted storage'}
        onPress={() => {
          MobxStore.saveToStorage('FAKE_DATA', {
            id: Math.random(),
            text: inputValue,
          });
        }}
        color={styles.text.opposite}
        bgColor={styles.bgSecondary.color}
      />
      <MyButton
        title={'Clear encrypted storage'}
        onPress={async () => {
          MobxStore.clearStorage();
        }}
        color={styles.text.opposite}
        bgColor={styles.bgSecondary.color}
      />
      <MyLists />
    </>
  );
});

export default EncryptedStorageHandler;
