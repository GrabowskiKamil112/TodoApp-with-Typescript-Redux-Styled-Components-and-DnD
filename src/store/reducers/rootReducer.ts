/* eslint-disable @typescript-eslint/no-unused-expressions */
import { ActionType, Action } from 'store/actions';

const initialState = { 'clean your room': true, 'eat lunch': false };

export interface IRootState {
    [key: string]: boolean;
}

const rootReducer = (state: IRootState = initialState, action: Action): IRootState => {
    switch (action.type) {
        case ActionType.ADD_ITEM:
            return {
                ...state,
                [action.payload]: false,
            };
        case ActionType.REMOVE_ITEM: {
            const newState = Object.assign({}, ...Object.keys(state).map((key) => key !== action.payload && { [key]: state[key] }));

            return { ...newState };
        }
        case ActionType.CHANGE_COMPLETION:
            return {
                ...state,
                [action.payload]: !state[action.payload],
            };
        case ActionType.REMOVE_COMPLETED: {
            const newState: IRootState = {};
            for (const [key, value] of Object.entries(state)) {
                value === false ? (newState[key] = value) : {};
            }
            return { ...newState };
        }
        default:
            return state;
    }
};

export default rootReducer;
