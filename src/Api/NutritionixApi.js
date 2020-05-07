import axios from 'axios';

const api = 'https://trackapi.nutritionix.com';

export const searchFood = async (query) => {
  try {
    const url = api + '/v2/search/instant';
    const response = await axios.get(url, {
      params: {query},
      headers: {
        Authorization: 'Basic a3VudGVzaDg3Okt1bnRlJGgxMTI5Mw==',
        'x-app-id': '107b9b50',
        'x-app-key': 'e586d7e356dc842b5c86818dcedb8d80',
      },
    });
    const {data} = response;
    return data;
  } catch (err) {
    console.log('error in nutritionix', err);
  }
};