export const FetchUsers = () => async dispatch => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => dispatch({type: 'SET_USERS', payload: json}));
};
