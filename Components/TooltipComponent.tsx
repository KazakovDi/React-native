import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useCopilot} from 'react-native-copilot';
import {useSelector} from 'react-redux';

const TooltipComponent = () => {
  const state = useSelector(state => state.localization.localization);
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
              {state.prev}
            </Text>
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity style={{padding: 7}} onPress={stop}>
          <Text
            style={{fontSize: 20, color: 'rgb(64,159,215)', display: 'inline'}}>
            {state.skip}
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
              {state.next}
            </Text>
          </TouchableOpacity>
        ) : null}
      </Text>
    </View>
  );
};

export default TooltipComponent;
