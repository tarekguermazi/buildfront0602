import authAxios from "src/modules/shared/axios/authAxios";
import AuthCurrentTenant from "src/modules/auth/authCurrentTenant";

export default class GlossaireService {
    static async getGloassaireCategories() {
        const tenantId = AuthCurrentTenant.get();
        const response = await authAxios.get(`/tenant/${tenantId}/category-glossaire`, {});
        return response.data;
    }
}
