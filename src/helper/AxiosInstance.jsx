import Axios from 'axios';
const API_ROOT = `https://insidecrypto.news/api`;

//create axios instance
export const instance = Axios.create({
  baseURL: `${API_ROOT}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

//get data from api
export const getApiData = async (url, param) => {
  let response;
  try {
    response = await instance({
      method: 'GET',
      url: `${url}`,
      params: param,
      // headers: {
      //   // Authorization: `Bearer ${accessToken()}`,
      // },
      transformResponse: [
        function (responseData) {
          // Do whatever you want to transform the data
          return JSON.parse(responseData);
        },
      ],
    });
  } catch (e) {
    return e.response;
  }
  return response;
};