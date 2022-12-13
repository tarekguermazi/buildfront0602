import authAxios from "src/modules/shared/axios/authAxios";
import AuthCurrentTenant from "src/modules/auth/authCurrentTenant";

export default class ContactService {
  static async submitFormData(data) {
    const body = {
      data,
    };
    const tenantId = AuthCurrentTenant.get();
    const response = await authAxios.post(`/tenant/${tenantId}/contact`, body);
    return response.data;
  }
}
