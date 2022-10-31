import API from './webapi.services';
import qs from 'qs';
import { BASE_URL } from './urls';

export const register = async (param) => {
  try {
    var config = {
      method: 'post',
      url: `${BASE_URL}/api/usuarios`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(param),
    };
    return await API(config).then(
      (response) => {
        return response.data;
      },
      (error) => {
        return error;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const login = async (param) => {
  try {
    var config = {
      method: 'post',
      url: `${BASE_URL}/oauth/token`,
      headers: {
        Authorization: 'Basic bXktYW5ndWxhci1hcHA6czEyMw==',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: qs.stringify(param),
    };
    return await API(config).then(
      (response) => {
        return response.data;
      },
      (error) => {
        return error;
      }
    );
  } catch (error) {
    console.log('error try: ' + error);
    return null;
  }
};

export const alterarSenha = async (param) => {
  try {
    var config = {
      method: 'put',
      url: `${BASE_URL}/api/usuarios/alterarSenha`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(param),
    };
    return await API(config).then(
      (response) => {
        return response.data;
      },
      (error) => {
        return error;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};
