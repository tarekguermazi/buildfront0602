import authAxios from "src/modules/shared/axios/authAxios";
import AuthCurrentTenant from "src/modules/auth/authCurrentTenant";

export default class SearchService {

    static async getSearchResultsForPublicationsBasedOnSearchString(SEARCH_STRING, FILTER_STRING) {
        const tenantId = AuthCurrentTenant.get();
        const response = await authAxios.get(`/tenant/${tenantId}/publication?filter[descriptionFR]=${SEARCH_STRING}${FILTER_STRING}`);
        return response.data;
    }

    // ARCHIVE SEARCH
    static async getSearchResultsForArchiveBasedOnSearchString(SEARCH_STRING, FILTER_STRING) {
        const tenantId = AuthCurrentTenant.get();
        const response = await authAxios.get(`/tenant/${tenantId}/publication?filter[descriptionFR]=${SEARCH_STRING}&filter[statut]=archive${FILTER_STRING}`);
        return response.data;
    }
}
