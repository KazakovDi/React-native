import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useContext} from 'react';
import {ThemeContext} from '../App';
import MyButton from './MyButton';
import {useCopilot} from 'react-native-copilot';
const TooltipComponent = props => {
  const styles = useContext(ThemeContext);
  const {goToNext, goToPrev, stop, currentStep, isFirstStep, isLastStep} =
    useCopilot();
  return (
    <View style={{minWidth: 150}}>
      <Text style={{fontSize: 20, color: '#fff'}}>{currentStep?.text}</Text>
      <Text>
        {!isFirstStep ? (
          <TouchableOpacity style={{padding: 7}} onPress={goToPrev}>
            <Text
              style={{
                fontSize: 20,
                color: 'rgb(64,159,215)',
                display: 'inline',
              }}>
              Prev
            </Text>
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity style={{padding: 7}} onPress={stop}>
          <Text
            style={{fontSize: 20, color: 'rgb(64,159,215)', display: 'inline'}}>
            {isLastStep ? 'End' : 'Skip'}
          </Text>
        </TouchableOpacity>

        {!isLastStep ? (
          <TouchableOpacity style={{padding: 7}} onPress={goToNext}>
            <Text
              style={{
                fontSize: 20,
                color: 'rgb(64,159,215)',
                display: 'inline',
              }}>
              Next
            </Text>
          </TouchableOpacity>
        ) : null}
      </Text>
    </View>
  );
};

export default TooltipComponent;
