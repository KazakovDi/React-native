import React from 'react';
import MyButton from './MyButton';
import {Provider, useSelector, useDispatch} from 'react-redux';

const LangSwitch = () => {
  const dispatch = useDispatch();
  const reducerState = useSelector(state => state);
  return (
    <>
      <MyButton
        color="#fff"
        bgColor="red"
        title="ru"
        onPress={() => dispatch({type: 'CHNG_LOC', payload: 'ru'})}
      />
      <MyButton
        color="#fff"
        bgColor="red"
        title="en"
        onPress={() => dispatch({type: 'CHNG_LOC', payload: 'en'})}
      />
      <MyButton
        color="#fff"
        bgColor="red"
        title="en"
        onPress={() => dispatch({type: 'ASYNC_FETCH'})}
      />
    </>
  );
};

export default LangSwitch;
