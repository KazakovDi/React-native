import React from 'react';
import {SafeAreaView, Text, Button, View, FlatList} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {observer} from 'mobx-react-lite';
import MobxStore from '../Stores/MobxStore';
import {useContext} from 'react';
import {ThemeContext} from '../App';
const ListItem = observer(({text}: {text: 'string'}) => {
  console.log(MobxStore);
  const styles = useContext(ThemeContext);
  return (
    <View
      style={{
        backgroundColor: styles.text.color,
        marginLeft: 5,
        marginBottom: 5,
      }}>
      <Text style={{color: styles.bgPrimary.color}}>{text}</Text>
    </View>
  );
});

export default ListItem;
