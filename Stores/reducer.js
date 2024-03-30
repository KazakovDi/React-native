import {initialState} from './ReduxStore';
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHNG_LOC':
      state.localization.setLanguage(action.payload);
      const newLoc = {...state.localization};

      let clone = {...state, localization: newLoc};
      return {...clone};
    case 'INCREMENT': {
      state.counter++;
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
