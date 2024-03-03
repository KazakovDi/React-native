import React from 'react';
import {SafeAreaView, Text, Button, View, FlatList} from 'react-native';

const ListItem = ({text}: {text: 'string'}) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        color: '#000',
        marginLeft: 5,
        marginBottom: 5,
      }}>
      <Text>{text}</Text>
    </View>
  );
};

export default ListItem;
