import authAxios from "src/modules/shared/axios/authAxios";
import AuthCurrentTenant from "src/modules/auth/authCurrentTenant";

export default class MediathequeService {
    // A LA UNE (latest 10)
    static async getLatestMediatheques() {
        // const tenantId = AuthCurrentTenant.get();
        const tenantId = '6315dbfd1241d0001e764e26';
        const response = await authAxios.get(`/tenant/${tenantId}/mediatique/`);
        return response.data;
    }

    static async getMediathequesBasedOnType(extension) {
        // const tenantId = AuthCurrentTenant.get();
        const tenantId = '6315dbfd1241d0001e764e26';
        const response = await authAxios.get(`/tenant/${tenantId}/mediatique/${extension}`);
        return response.data;
    }

    static async getOneMediatheque(id) {
        // const tenantId = AuthCurrentTenant.get();
        const tenantId = '6315dbfd1241d0001e764e26';
        const response = await authAxios.get(`/tenant/${tenantId}/mediatique/${id}`);
        return response.data;
    }
}
