import authAxios from "src/modules/shared/axios/authAxios";
import AuthCurrentTenant from "src/modules/auth/authCurrentTenant";

export default class GlossaireService {
    static async getGloassaireCategories() {
        const tenantId = AuthCurrentTenant.get();
        const response = await authAxios.get(`/tenant/${tenantId}/category-glossaire`, {});
        return response.data;
    }
    // fetchin list of glossaire
    static async getGloassaireList() {
        const tenantId = AuthCurrentTenant.get();
        const response = await authAxios.get(`/tenant/${tenantId}/glossaire`, {});
        return response.data;
    }
    // GET ONE
    static async getOneGloassaire(GLOSSAIRE_ID) {
        const tenantId = AuthCurrentTenant.get();
        const response = await authAxios.get(`/tenant/${tenantId}/glossaire/${GLOSSAIRE_ID}`);
        return response.data;
    }
}
