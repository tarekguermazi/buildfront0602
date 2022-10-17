import authAxios from "src/modules/shared/axios/authAxios";
import AuthCurrentTenant from "src/modules/auth/authCurrentTenant";

export default class TenantService {
    static async getTenant(id) {
        // const tenantId = AuthCurrentTenant.get();
        const tenantId = '6315dbfd1241d0001e764e26';
        const response = await authAxios.get(`/tenant/${tenantId}`);
        return response.data;
    }
}
