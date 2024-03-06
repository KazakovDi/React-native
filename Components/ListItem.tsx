import React from 'react';
import {SafeAreaView, Text, Button, View, FlatList} from 'react-native';

const ListItem = ({text}: {text: 'string'}) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        marginLeft: 5,
        marginBottom: 5,
      }}>
      <Text style={{color: '#000'}}>{text}</Text>
    </View>
  );
};

export default ListItem;
