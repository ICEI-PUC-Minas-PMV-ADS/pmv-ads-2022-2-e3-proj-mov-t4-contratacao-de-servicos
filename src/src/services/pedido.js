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
