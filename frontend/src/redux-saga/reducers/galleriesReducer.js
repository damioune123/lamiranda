import {
  GET_GALLERIES,
  GET_GALLERIES_SUCCESS,
  GET_GALLERIES_FAILURE,
} from '../actions';

import { initialState } from '../constants/initialState';

export default function galleriesReducer(
  state = initialState()['galleries'],
  action
) {
  switch (action.type) {
    case GET_GALLERIES:
      return {
        ...state,
        loading: true,
        galleries: null,
        error: null,
      };
    case GET_GALLERIES_SUCCESS:
      return {
        ...state,
        loading: false,
        galleries: action.payload.galleries,
      };
    case GET_GALLERIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        galleries: null,
      };

    default:
      return state;
  }
}
