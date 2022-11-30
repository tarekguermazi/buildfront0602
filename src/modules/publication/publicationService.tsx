import authAxios from "src/modules/shared/axios/authAxios";
import AuthCurrentTenant from "src/modules/auth/authCurrentTenant";
import moment from 'moment';

export default class PublicationService {
  static async update(id, data) {
    const body = {
      id,
      data,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.put(
      `/tenant/${tenantId}/publication/${id}`,
      body
    );

    return response.data;
  }

  static async destroyAll(ids) {
    const params = {
      ids,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.delete(`/tenant/${tenantId}/publication`, {
      params,
    });

    return response.data;
  }

  static async create(data) {
    const body = {
      data,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.post(
      `/tenant/${tenantId}/publication`,
      body
    );

    return response.data;
  }

  static async import(values, importHash) {
    const body = {
      data: values,
      importHash,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.post(
      `/tenant/${tenantId}/publication/import`,
      body
    );

    return response.data;
  }

  static async find(id) {
    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/publication/${id}`
    );

    return response.data;
  }

  static async getRelated(type) {
    const tenantId = AuthCurrentTenant.get();
    const response = await authAxios.get(`/tenant/${tenantId}/publication?filter[type]=${type}&limit=4`);
    return response.data;
  }

  static async list() {
    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/publication`,
      {}
    );

    return response.data;
  }

  static async search(filter, orderBy, limit, offset) {
    const params = {
      filter,
      orderBy,
      limit,
      offset,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/publication/search`,
      {
        params,
      }
    );

    return response.data;
  }

  static async listAutocomplete(query, limit) {
    const params = {
      query,
      limit,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/publication/autocomplete`,
      {
        params,
      }
    );

    return response.data;
  }

  // HELPER METHODS
  static pipeDate(date) {
    let d = date.split('T')[0];
    return moment(d).format('LL');
  };
}
