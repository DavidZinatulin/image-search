import { SAVE_QUERY } from "app/utils/constants";

const initialState = {
    saved: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_QUERY:
            return {
                ...state,
                saved: action.saved,
            };
        default:
            return state;
    }
};