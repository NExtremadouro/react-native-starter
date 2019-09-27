import { SET_LOADING, CLEAR_LOADING } from '../actions/loading'

export const initialLoading = {
};

export default function loading(state = initialLoading, { type, payload }) {
  switch (type) {

    case SET_LOADING:
      if (payload.isLoading) {
        let obj = {};
        obj[payload.process] = payload.isLoading

        return {
          ...state,
          ...obj,
        };
      } else {
        let obj = { ...state };
        delete obj[payload.process];
        return obj;
      }

    case CLEAR_LOADING:
      return initialLoading;

    default:
      return state;
  }
}
