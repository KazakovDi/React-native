import React from 'react';
import {SafeAreaView, Text, Image, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const MyButton = ({
  title,
  onPress,
  bgColor,
  color,
}: {
  title: string;
  bgColor: string;
  color: string;
  onPress: Function;
}) => {
  const styles = EStyleSheet.create({
    appButtonContainer: {
      elevation: 8,
      backgroundColor: bgColor,
      paddingVertical: 10,
      paddingHorizontal: 12,
    },
    appButtonText: {
      fontSize: 14,
      color: color,
      alignSelf: 'center',
      textTransform: 'uppercase',
    },
  });
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;
