import React, {useContext} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {ThemeContext} from '../App';
import {FetchUsers} from '../Stores/usersFetch';
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.localization.counter);
  const data = useSelector(state => state.localization.users);
  const styles = useContext(ThemeContext);
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          dispatch({type: 'INCREMENT'});

          // dispatch({type: 'ASYNC_INCREMENT'});
        }}>
        <Text>increment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch({type: 'DECREMENT'});
        }}>
        <Text tyle={{color: styles.text.color}}>decrement</Text>
      </TouchableOpacity>
      <Text style={{fontSize: 22, color: styles.text.color}}>{counter}</Text>
      <TouchableOpacity
        onPress={() => {
          dispatch(FetchUsers());
          // dispatch({type: 'FETCH_USERS'});
        }}>
        <Text style={{color: styles.text.color}}>GET USERS</Text>
      </TouchableOpacity>
      {data.map(item => {
        return <Text tyle={{color: styles.text.color}}>{item.email}</Text>;
      })}
    </>
  );
};

export default Counter;
