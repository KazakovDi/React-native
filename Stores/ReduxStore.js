import {createStore, combineReducers} from 'redux';
import {reducer} from './reducer';
import LocalizedStrings from 'react-native-localization';

let localizationStrings = new LocalizedStrings({
  en: {
    skip: 'Skip',
    prev: 'Prev',
    next: 'Next',
    end: 'End',
    firstGuideStep:
      'First step many text many text many text many text many text',
    secondGuideStep: 'Second step',
    thirdGuideStep: 'Third step',
  },
  ru: {
    skip: 'Пропус.',
    prev: 'Пред.',
    next: 'Далее',
    end: 'Завер.',
    firstGuideStep:
      'Первый шаг много текста много текста много текста много текста',
    secondGuideStep: 'Второй шаг',
    thirdGuideStep: 'Третий шаг',
  },
});
export const initialState = {
  localization: localizationStrings,
};
const reducers = combineReducers({
  localization: reducer,
});
const store = createStore(reducers, initialState);

export default store;
