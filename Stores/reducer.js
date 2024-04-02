import {initialState} from './ReduxStore';
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHNG_LOC':
      state.localization.setLanguage(action.payload);
      const newLoc = {
        ...state.localization,
      };
      newLoc.setLanguage = state.localization.setLanguage;
      newLoc._fallbackValues = state.localization._fallbackValues;
      return {...state, localization: newLoc};

    case 'INCREMENT': {
      state.counter++;
      return {...state};
    }
    case 'D_INCREMENT': {
      state.counter += 2;
      return {...state};
    }
    case 'DECREMENT': {
      state.counter--;
      return {...state};
    }
    case 'SET_USERS': {
      state.users = action.payload;
      return {...state};
    }
    default:
      return initialState;
  }
};
