import authAxios from "src/modules/shared/axios/authAxios";
import AuthCurrentTenant from "src/modules/auth/authCurrentTenant";

export default class ContactService {
    static async submitFormData(form: any) {
        const tenantId = AuthCurrentTenant.get();
        const response = await authAxios.post(`/tenant/${tenantId}/contact`, form);
        return response.data;
    }
}
