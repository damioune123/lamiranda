import {
    GET_HOMES,
    GET_HOMES_SUCCESS,
    GET_HOMES_FAILURE
} from "../actions";
import { initialState } from '../constants/initialState';
import { HYDRATE } from "next-redux-wrapper";

export default function contactReducer(
    state = initialState()['homes'],
    action
) {
    switch (action.type) {
        case HYDRATE:
            return {...state, ...action.payload.homes};
        case GET_HOMES:
            return {
                ...state,
                loading: true,
                homes: null,
                error: null
            };
        case GET_HOMES_SUCCESS:
            return {
                ...state,
                loading: false,
                homes: action.payload.homes
            };

        case GET_HOMES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                homes: null
            };

        default:
            return state;
    }
}
