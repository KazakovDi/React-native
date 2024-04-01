import React, {useContext, useEffect, useRef, useState} from 'react';
import Contacts from 'react-native-contacts';
import {request, PERMISSIONS} from 'react-native-permissions';
import {View, Text, FlatList, Image, TextInput} from 'react-native';
import ListItem from './ListItem';
import MyButton from './MyButton';
import {ThemeContext} from '../App';
import {useSelector} from 'react-redux';

const ContactsList = () => {
  const [contactList, setContact] = useState([]);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const styles = useContext(ThemeContext);
  const localization = useSelector(state => state.localization.localization);

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
          placeholder={localization.name}
        />
        <TextInput
          style={{borderWidth: 1, borderColor: '#000'}}
          onChangeText={e => (phoneRef.current.value = e)}
          ref={phoneRef}
          placeholder={localization.phone}
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
          title={localization.add}
          bgColor="#000"
          color="#fff"
        />
      </View>
      <FlatList
        contentContainerStyle={{flexGrow: 1}}
        keyExtractor={item => item.rawContactId}
        data={contactList}
        renderItem={({item}) => (
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{color: styles.text.color}}>{item.givenName}</Text>
            {item.phoneNumbers.length ? (
              <Text style={{color: styles.text.color}}>
                {' ' + item.phoneNumbers[0].number}
              </Text>
            ) : null}

            <Image source={item.thumbnailPath} />
          </View>
        )}
      />
    </>
  );
};

export default ContactsList;
