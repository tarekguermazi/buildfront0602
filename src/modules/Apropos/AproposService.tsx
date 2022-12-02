import authAxios from "src/modules/shared/axios/authAxios";
import AuthCurrentTenant from "src/modules/auth/authCurrentTenant";

export default class AproposService {
    static async getApropos() {
        const tenantId = AuthCurrentTenant.get();
        const response = await authAxios.get(`/tenant/${tenantId}/apropos`);
        return response.data;
    }
}

