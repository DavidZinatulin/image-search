import Unsplash, { toJson } from "unsplash-js";
import { IMAGES_TO_LOAD } from "app/utils/constants";

export function generateFormValues(formStructure) {
    let fields = {};

    formStructure.map((item) => {
        fields[item.name] = item.defaultValue;
    });

    return fields;
}

export async function unsplashRequest(query, page) {
    const unsplash = new Unsplash({
        applicationId: APP_ACCESS,
        secret: APP_SECRET
    });

    const response = await unsplash.search.photos(query, page, IMAGES_TO_LOAD);

    const json = await toJson(response);

    return json.results;
};