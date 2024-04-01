import React from 'react';
import MobxStore from '../Stores/MobxStore';
import {observer} from 'mobx-react-lite';
import {TextInput, View} from 'react-native';
import MyLists from './MyLists';
import MyButton from './MyButton';
import {useContext} from 'react';
import {ThemeContext} from '../App';
import {useSelector} from 'react-redux';
import Config from 'react-native-config';
const EncryptedStorageHandler = observer(() => {
  const [inputValue, setInputValue] = React.useState('');
  const localization = useSelector(state => state.localization.localization);
  console.log('FAKE_DATA', Config.getConstants());
  const styles = useContext(ThemeContext);
  return (
    <>
      <TextInput
        style={{borderWidth: 1, borderColor: '#000'}}
        placeholder={localization.defaultPlaceholder}
        onChangeText={text => setInputValue(text)}
        value={inputValue}
      />
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <MyButton
          title={localization.save}
          onPress={() => {
            MobxStore.saveToStorage(Config.FAKE_DATA, {
              id: Math.random(),
              text: inputValue,
            });
            setInputValue('');
          }}
          color={styles.text.opposite}
          bgColor={styles.bgSecondary.color}
        />
        <MyButton
          title={localization.clear}
          onPress={async () => {
            MobxStore.clearStorage();
            setInputValue('');
          }}
          color={styles.text.opposite}
          bgColor={styles.bgSecondary.color}
        />
      </View>

      <MyLists />
    </>
  );
});

export default EncryptedStorageHandler;
