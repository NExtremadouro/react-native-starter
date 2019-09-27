import { SET_USER, USER_LOGOUT } from "../actions/auth";

const initialState = {
  isAuth: false
};

export default function auth(state = initialState, { type, payload }) {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        isAuth: true,
        userData: payload,
      }
    case USER_LOGOUT:
      return initialState;
    default:
      return state;
  }
}
