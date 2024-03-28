import React from 'react';
import {Text, View} from 'react-native';
import {observer} from 'mobx-react-lite';
import {useContext} from 'react';
import {ThemeContext} from '../App';
const ListItem = observer(({text}: {text: 'string'}) => {
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
