import React, {useContext, useEffect, useRef, useState} from 'react';
import Contacts from 'react-native-contacts';
import {request, PERMISSIONS} from 'react-native-permissions';
import {View, Text, FlatList, Image, TextInput} from 'react-native';
import ListItem from './ListItem';
import MyButton from './MyButton';
import {ThemeContext} from '../App';

const ContactsList = () => {
  const [contactList, setContact] = useState([]);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const styles = useContext(ThemeContext);
  useEffect(() => {
    request(PERMISSIONS.ANDROID.READ_CONTACTS).then(res => {
      Contacts.getAll().then(res => {
        setContact(res);
      });
    });
  }, []);
  return (
    <>
      <View>
        <TextInput
          style={{borderWidth: 1, borderColor: '#000'}}
          onChangeText={e => (nameRef.current.value = e)}
          ref={nameRef}
          plaecolder={'Name'}
        />
        <TextInput
          style={{borderWidth: 1, borderColor: '#000'}}
          onChangeText={e => (phoneRef.current.value = e)}
          ref={phoneRef}
          plaecolder={'Phone'}
        />
        <MyButton
          onPress={() => {
            request(PERMISSIONS.ANDROID.WRITE_CONTACTS).then(res => {
              Contacts.addContact({
                givenName: nameRef.current.value,
                phoneNumbers: [
                  {label: 'mobile', number: phoneRef.current.value},
                ],
              })
                .then(res => console.log('res', res))
                .catch(err => console.log('err', err));
            });
          }}
          title="Add"
          bgColor="#000"
          color="#fff"
        />
      </View>
      <FlatList
        contentContainerStyle={{flexGrow: 1}}
        keyExtractor={item => item.rawContactId}
        data={contactList}
        renderItem={({item}) => (
          <View>
            <Text style={{color: styles.text.color}}>{item.givenName}</Text>
            <Text style={{color: styles.text.color}}>
              {item.phoneNumbers[0].number}
            </Text>
            <Image source={item.thumbnailPath} />
          </View>
        )}
      />
    </>
  );
};

export default ContactsList;
