import { SET_USER } from "../actions/auth";

const initialState = {
  isAuth: false
};

export default function auth(state = initialState, { type, payload }) {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        userData: payload,
      }
    default:
      return state;
  }
}
