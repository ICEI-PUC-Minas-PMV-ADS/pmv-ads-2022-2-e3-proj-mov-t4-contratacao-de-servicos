import API from './webapi.services';
import qs from 'qs';
import { BASE_URL } from './urls';

export const listaPedidoByCliente = async (param) => {
  try{
    return await API.get(`${BASE_URL}/api/pedido/clienteId/${param}`).then(
      response => {
        return response.data;
      },
      error => {
        console.log(error);
        return [];
      }
    );
  }catch(error){
    console.log(error);
    return []
  }
}


export const salvar = async (param) => {
  try {
    var config = {
      method: 'post',
      url: `${BASE_URL}/api/pedido`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(param),
    };
    return await API(config).then(
      (response) => {
        console.log(response)
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