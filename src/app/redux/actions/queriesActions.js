import { SAVE_QUERY } from "app/utils/constants";

export const saveQuery = (query, previouslySaved) => ({ type: SAVE_QUERY, saved: [query, ...previouslySaved] });