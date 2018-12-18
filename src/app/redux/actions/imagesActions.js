import { unsplashRequest } from "app/utils/helpers";

import {
    CLEAR_IMAGES,
    RECEIVE_IMAGES,
    REQUEST_IMAGES
} from "app/utils/constants";

export const loadImages = (query, page, previouslyLoaded, initialLoad = false) => {
    return async (dispatch) => {
        dispatch({ type: REQUEST_IMAGES, loading: true });
        const results = await unsplashRequest(query, page),
            notFound = initialLoad && results.length === 0;

        dispatch({
            type: RECEIVE_IMAGES,
            loading: false,
            data: [...previouslyLoaded, ...results],
            notFound
        });
    };
};

export const initialLoad = (query) => {
    return (dispatch) => {
        dispatch({ type: CLEAR_IMAGES, data: [], notFound: false });
        dispatch(loadImages(query, 1, [], true));
    };
};