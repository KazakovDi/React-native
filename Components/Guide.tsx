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
const Guide = () => {
  const CopilotText = walkthroughable(Text);
  const CopilotBlock = walkthroughable(View);
  const {start} = useCopilot();
  const styles = useContext(ThemeContext);
  return (
    <View>
      <CopilotStep
        text="First step gfdddddddddddgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfdfgdfgdfdfgdfgerergejyuiurtykthdgdf"
        order={1}
        name="hello">
        <CopilotText>Text1</CopilotText>
      </CopilotStep>
      <CopilotStep text="Second step" order={2} name="description">
        <CopilotText>Text2</CopilotText>
      </CopilotStep>
      <CopilotStep text="Third step" order={3} name="end">
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
