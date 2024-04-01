import React, {useContext, useState} from 'react';
import MyButton from './MyButton';
import {useSelector, useDispatch} from 'react-redux';
import {ThemeContext} from '../App';

const LangSwitch = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const styles = useContext(ThemeContext);
  return (
    <>
      <MyButton
        color={styles.text.opposite}
        bgColor={styles.bgSecondary.color}
        title={state.localization.localization.lang}
        onPress={() => {
          if (state.localization.localization.lang === 'ru') {
            dispatch({type: 'CHNG_LOC', payload: 'en'});
          } else {
            dispatch({type: 'CHNG_LOC', payload: 'ru'});
          }
        }}
      />
    </>
  );
};

export default LangSwitch;
