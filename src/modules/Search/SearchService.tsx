import authAxios from "src/modules/shared/axios/authAxios";
import AuthCurrentTenant from "src/modules/auth/authCurrentTenant";

export default class SearchService {
  // GET CATEGORIES LIST FOR PUBLICATIONS
  static async getCategoriesList() {
    const tenantId = AuthCurrentTenant.get();
    const response = await authAxios.get(
      `/tenant/${tenantId}/category-publication`
    );
    return response.data;
  }

  static async getSearchResultsForPublicationsBasedOnSearchString(
    SEARCH_STRING,
    FILTER_STRING,
    OFFSET
  ) {
    const tenantId = AuthCurrentTenant.get();
    const response = await authAxios.get(
      `/tenant/${tenantId}/search?filter=${SEARCH_STRING}&limit=5&offset=${OFFSET}&validated={true}`
    );
    return response.data;
  }

  // SAERCH BASED ON CATEGORIES (REVERSE LOGIC)
  static async searchUsingMainCatefories(SEARCH_STRING, categoryName, OFFSET) {
    const tenantId = AuthCurrentTenant.get();
    const response = await authAxios.get(
      `/tenant/${tenantId}/category-publication?filter[titleFR]=${categoryName}`
    );
    const publicationsOfSelectedCategory = response.data.rows[0]?.publications;
    const finalResponseOBject = {
      rows: publicationsOfSelectedCategory ?? [],
      count: publicationsOfSelectedCategory?.length ?? 0,
    };
    return finalResponseOBject;
  }

  // ARCHIVE SEARCH
  static async getSearchResultsForArchiveBasedOnSearchString(
    SEARCH_STRING,
    FILTER_STRING,
    OFFSET
  ) {
    const tenantId = AuthCurrentTenant.get();
    const response = await authAxios.get(
      `/tenant/${tenantId}/publication?filter[descriptionFR]=${SEARCH_STRING}&limit=5&offset=${OFFSET}&filter[statut]=archive${FILTER_STRING}`
    );
    return response.data;
  }
}
