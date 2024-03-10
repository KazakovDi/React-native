import React from 'react';
import {SafeAreaView, Text, Image, TouchableOpacity} from 'react-native';
import Clipboard, {useClipboard} from '@react-native-clipboard/clipboard';

const Clip = ({value}) => {
  const [clip, setClip] = useClipboard();
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setClip(value);
        }}>
        <Text>Some value to copy</Text>
      </TouchableOpacity>
      <Text>{clip}</Text>
    </>
  );
};

export default Clip;
