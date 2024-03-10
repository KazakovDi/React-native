import React from 'react';
import {SafeAreaView, Text, Image, TouchableOpacity} from 'react-native';
import Clipboard, {useClipboard} from '@react-native-clipboard/clipboard';
import {useContext} from 'react';
import {ThemeContext} from '../App';
const Clip = ({value}) => {
  const [clip, setClip] = useClipboard();
  const styles = useContext(ThemeContext);
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setClip(value);
        }}>
        <Text style={{color: styles.text.color}}>Some value to copy</Text>
      </TouchableOpacity>
      <Text style={{color: styles.text.color}}>{clip}</Text>
    </>
  );
};

export default Clip;
