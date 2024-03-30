import React, {useContext, useState} from 'react';
import MyButton from './MyButton';
import {Provider, useSelector, useDispatch, Switch} from 'react-redux';
import {ThemeContext} from '../App';

const LangSwitch = () => {
  const [langState, setState] = useState();
  const dispatch = useDispatch();
  const localization = useSelector(state => state.localization);
  console.log('loca', localization);
  const styles = useContext(ThemeContext);
  return (
    <>
      <MyButton
        color={styles.text.opposite}
        bgColor={styles.bgSecondary.color}
        title={localization.lang}
        onPress={() => {
          if (localization.lang === 'ru') {
            dispatch({type: 'CHNG_LOC', payload: 'en'});
            setState({});
          } else {
            dispatch({type: 'CHNG_LOC', payload: 'ru'});
            setState({});
          }
        }}
      />
    </>
  );
};

export default LangSwitch;
