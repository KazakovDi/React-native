import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import MyButton from './MyButton';
import {useContext} from 'react';
import {ThemeContext} from '../App';
import MobxStore from '../Stores/MobxStore';
export default () => {
  const [open, setOpen] = useState(false);
  const styles = useContext(ThemeContext);
  return (
    <>
      <MyButton
        bgColor={styles.bgSecondary.color}
        color={styles.text.opposite}
        title="Change Date"
        onPress={() => setOpen(true)}
      />
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
