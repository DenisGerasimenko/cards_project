import {mainInitialState, MainInitialStateType} from "./mainInitialState";
import {mainReducerActions, SET_ERROR, SET_STATUS} from "./mainActions";

export const mainReducer = (state: MainInitialStateType = mainInitialState, action: mainReducerActions) => {
    switch (action.type) {
        case SET_STATUS: {
            debugger
            return {
                ...state,
                status: action.status
            }
        }
        case SET_ERROR: {
            debugger
            return {
                ...state,
                error: action.error
            }
        }

        default: {
            return state;
        }
    }
};