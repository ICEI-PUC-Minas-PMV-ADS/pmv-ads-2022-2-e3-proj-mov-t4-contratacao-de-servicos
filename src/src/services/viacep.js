import API from './webapi.services';

export const buscaCep = async (param) => {
  try{
    return await API.get(`https://viacep.com.br/ws/${param}/json/`).then(
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
