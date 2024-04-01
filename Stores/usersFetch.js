import Config from 'react-native-config';
export const FetchUsers = () => async dispatch => {
  fetch(Config.FAKE_JSON_API_URL)
    .then(response => response.json())
    .then(json => dispatch({type: 'SET_USERS', payload: json}));
};
