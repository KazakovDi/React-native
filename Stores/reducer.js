import {initialState} from './ReduxStore';
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHNG_LOC':
      console.log('CHNG_LOC', state.localization);
      state.localization.setLanguage(action.payload);
      console.log('CHNG_LOC', state.localization);

      return {...state};
    case 'INCREMENT': {
      state.counter++;
      return {...state};
    }
    case 'DECREMENT': {
      state.counter--;
      return {...state};
    }
    case 'SET_USERS': {
      console.log('set');
      state.users = action.payload;
      return {...state};
    }
    default:
      return initialState;
  }
};
