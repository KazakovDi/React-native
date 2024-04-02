import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MobxStore from '../Stores/MobxStore';
import {observer} from 'mobx-react-lite';

const Test = observer(() => {
  console.log('MobxStore.counter', MobxStore.counter);
  return (
    <View>
      <TouchableOpacity onPress={() => MobxStore.Inc()}>
        <Text>inc</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => MobxStore.Dec()}>
        <Text>dec</Text>
      </TouchableOpacity>
      <Text>{MobxStore.counter}</Text>
    </View>
  );
});

export default Test;
