import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer} from './reducer';
import LocalizedStrings from 'react-native-localization';
import {thunk} from 'redux-thunk';
console.log('thunk', thunk);
// const sagaMiddleware = createSagaMiddleware();
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
  counter: 0,
  users: [],
};
const reducers = combineReducers({
  localization: reducer,
});
const store = createStore(
  reducers,
  // initialState,
  // applyMiddleware(sagaMiddleware),
  applyMiddleware(thunk),
);
// sagaMiddleware.run(rootWacher);
export default store;
