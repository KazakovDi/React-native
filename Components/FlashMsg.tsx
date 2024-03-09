import React, {useContext} from 'react';
import FlashMessage, {showMessage} from 'react-native-flash-message';
import {Button, View} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import Pill from '../assets/svg/pill.svg';
import {observer} from 'mobx-react-lite';
import {ThemeContext} from '../App';
import MyButton from './MyButton';
const FlashMsg = observer(() => {
  const styles = useContext(ThemeContext);
  return (
    <>
      <FlashMessage animationDuration={500} position="top" />
      <MyButton
        title="Show flash message"
        color={styles.text.opposite}
        onPress={() => {
          showMessage({
            type: 'info',
            message: 'Flash message',
            backgroundColor: styles.bgSecondary.color,
            color: styles.text.opposite,
            icon: () => (
              <View style={{marginRight: 5}}>
                <Svg width={15} height={15}>
                  <Pill width={15} height={15} />
                </Svg>
              </View>
            ),
          });
        }}
        bgColor={styles.bgSecondary.color}
      />
    </>
  );
});

export default FlashMsg;
