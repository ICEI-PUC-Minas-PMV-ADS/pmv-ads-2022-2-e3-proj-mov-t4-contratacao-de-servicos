import API from './webapi.services';
import qs from 'qs';
import { BASE_URL } from './urls';

export const listaTipoServico = async () => {
  try{
    return await API.get(`${BASE_URL}/api/tipoServico`).then(
      response => {
        return response.data;
      },
      error => {
        console.log(error);
        return null;
      }
    );
  }catch(error){
    console.log(error);
    return null
  }
}
