import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {useContext} from 'react';
import {ThemeContext} from '../App';
import MobxStore from '../Stores/MobxStore';
import {TouchableOpacity, Text} from 'react-native';
export default () => {
  const [open, setOpen] = useState(false);
  const styles = useContext(ThemeContext);
  return (
    <>
      <TouchableOpacity
        onPress={() => setOpen(true)}
        style={{color: styles.text.color}}>
        <Text>
          {new Intl.DateTimeFormat('ru-RU', {
            dateStyle: 'full',
            timeStyle: 'medium',
          }).format(MobxStore.date)}
        </Text>
      </TouchableOpacity>
      <DatePicker
        theme={MobxStore.themeProps.theme}
        modal
        open={open}
        date={MobxStore.date}
        onConfirm={(date: Date) => {
          setOpen(false);
          MobxStore.setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};
