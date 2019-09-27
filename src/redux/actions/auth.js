export const SET_USER = 'SET_USER';
export const USER_LOGOUT = 'USER_LOGOUT';

export function setUser(payload) {
  return {
    type: SET_USER,
    payload
  };
}

export function userLogout() {
  return {
    type: USER_LOGOUT,
  };
}
