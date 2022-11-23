import authAxios from "src/modules/shared/axios/authAxios";
import AuthCurrentTenant from "src/modules/auth/authCurrentTenant";

export default class SearchService {
    // GET CATEGORIES LIST FOR PUBLICATIONS
    static async getCategoriesList() {
        const tenantId = AuthCurrentTenant.get();
        const response = await authAxios.get(`/tenant/${tenantId}/category-publication`);
        return response.data;
    }

    static async getSearchResultsForPublicationsBasedOnSearchString(SEARCH_STRING, FILTER_STRING, OFFSET) {

        let extension = "";
        // HANDLING EMPRT SEARCH
        if (SEARCH_STRING.length >= 1)
            extension = `?filter[descriptionFR]=${SEARCH_STRING}`;

        // HANDLING FILTER
        if (FILTER_STRING !== "autre") {
            if (SEARCH_STRING.length >= 1) {
                // THERE IS SEARCH STRING, use &
                extension = `?filter[descriptionFR]=${SEARCH_STRING}&filter[categorie]=${FILTER_STRING}`;
            } else {
                // NO SEARCH STRING, use ?
                extension = `?filter[categorie]=${FILTER_STRING}`;
            }
        }

        const tenantId = AuthCurrentTenant.get();
        const response = await authAxios.get(`/tenant/${tenantId}/publication${extension}&limit=5&offset=${OFFSET}`);
        return response.data;
    }

    // ARCHIVE SEARCH
    static async getSearchResultsForArchiveBasedOnSearchString(SEARCH_STRING, FILTER_STRING) {
        const tenantId = AuthCurrentTenant.get();
        const response = await authAxios.get(`/tenant/${tenantId}/publication?filter[descriptionFR]=${SEARCH_STRING}&filter[statut]=archive${FILTER_STRING}`);
        return response.data;
    }
}
