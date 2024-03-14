import React from 'react';
import {
  CopilotProvider,
  CopilotStep,
  walkthroughable,
  useCopilot,
} from 'react-native-copilot';
import {Text, View} from 'react-native';
import {useContext} from 'react';
import {ThemeContext} from '../App';
import MyButton from './MyButton';
import {useSelector} from 'react-redux';
const Guide = () => {
  const CopilotText = walkthroughable(Text);
  const CopilotBlock = walkthroughable(View);
  const {start} = useCopilot();
  const styles = useContext(ThemeContext);
  const redState = useSelector(state => state.localization);
  return (
    <View>
      <CopilotStep
        text={redState.localization.firstGuideStep}
        order={1}
        name="hello">
        <CopilotText>Text1</CopilotText>
      </CopilotStep>
      <CopilotStep
        text={redState.localization.secondGuideStep}
        order={2}
        name="description">
        <CopilotText>Text2</CopilotText>
      </CopilotStep>
      <CopilotStep
        text={redState.localization.thirdGuideStep}
        order={3}
        name="end">
        <CopilotBlock
          style={{
            backgroundColor: '#fff',
            width: 50,
            height: 50,
          }}></CopilotBlock>
      </CopilotStep>
      <MyButton
        title={'Guide'}
        onPress={() => start()}
        color={styles.text.opposite}
        bgColor={styles.bgSecondary.color}
      />
    </View>
  );
};

export default Guide;
