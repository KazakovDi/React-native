import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer} from './reducer';
import LocalizedStrings from 'react-native-localization';
import {rootWacher} from './rootWatcher';
import {thunk} from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
let localizationStrings = new LocalizedStrings({
  en: {
    bottomSheet: 'Show bottom sheet',
    takePhoto: 'Photo',
    takeVideo: 'Video',
    add: 'Add',
    name: 'Name',
    phone: 'Phone',
    save: 'Save',
    clear: 'Clear',
    defaultPlaceholder: 'Input your value here',
    guide: 'Guide',
    dateFormatLang: 'en-US',
    flashMsgBtn: 'Show flash message',
    flashMsg: 'Flash message',
    lang: 'en',
    skip: 'Skip',
    prev: 'Prev',
    next: 'Next',
    end: 'End',
    gradient: 'Gradient',
    firstGuideStep:
      'First step many text many text many text many text many text',
    secondGuideStep: 'Second step',
    thirdGuideStep: 'Third step',
  },
  ru: {
    bottomSheet: 'Доп. окно',
    takePhoto: 'Фото',
    takeVideo: 'Видео',
    add: 'Добавить',
    name: 'Имя',
    phone: 'Телефон',
    save: 'Сохранить',
    clear: 'Очистить',
    defaultPlaceholder: 'Введите значение',
    guide: 'Гайд',
    dateFormatLang: 'ru-RU',
    flashMsgBtn: 'Показать сообщение',
    flashMsg: 'Сообщение',
    gradient: 'Градиент',
    lang: 'ru',
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
  applyMiddleware(sagaMiddleware),
  // applyMiddleware(thunk),
);
sagaMiddleware.run(rootWacher);
export default store;
