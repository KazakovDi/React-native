import React from 'react';
import {Text, View, FlatList, SectionList} from 'react-native';
import {observer} from 'mobx-react-lite';
import ListItem from './ListItem';

import MobXStore from '../Stores/MobxStore';
const sectionData = [
  {
    title: 'Tasty food',
    data: ['Pizza', 'Burger', 'Potato'],
    key: 1,
  },
  {
    title: 'Japanese',
    data: ['Rolls', 'Salmon'],
    key: 2,
  },
  {
    title: 'Drinks',
    data: ['Water', 'Pepsi', 'Fanta'],
    key: 3,
  },
];
const MyLists = observer(({}) => {
  return (
    <>
      <FlatList
        data={MobXStore.store['FAKE_DATA']}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ListItem text={item.text} />}
      />
      {/* <SectionList
        sections={sectionData}
        renderSectionHeader={({section: {title}}) => <Text>{title}</Text>}
        renderItem={({item}) => (
          <View style={{marginLeft: 5, backgroundColor: '#000', color: '#fff'}}>
            <Text style={{color: '#fff'}}>{item}</Text>
          </View>
        )}
      /> */}
    </>
  );
});

export default MyLists;
