import {
    CLEAR_IMAGES,
    RECEIVE_IMAGES,
    REQUEST_IMAGES
} from "app/utils/constants";

const initialState = {
    data: [],
    loading: false,
    notFound: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_IMAGES:
            return {
                ...state,
                loading: action.loading,
            };
        case RECEIVE_IMAGES:
            return {
                ...state,
                loading: action.loading,
                data: action.data,
                notFound: action.notFound
            };
        case CLEAR_IMAGES:
            return {
                ...state,
                data: action.data,
                notFound: action.notFound
            };
        default:
            return state;
    }
};