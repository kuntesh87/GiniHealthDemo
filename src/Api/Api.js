import axios from 'axios';

const api = 'https://us-central1-gini-v0.cloudfunctions.net';

export const getAnalysisForFood = async () => {
  try {
    const url = api + '/analyseNutritionixTest';
    const response = await axios.get(url, {
      params: {
        data: '1 cup mashed potatoes',
      },
      headers: {Authorization: 'Basic 8c74efc6bd0bb10200d38237e1905d6b'},
    });
    console.log('response', response);
  } catch (err) {
    console.log('error', err);
  }
};

getAnalysisForFood().then().catch();

export const getLogTest = async () => {
  try {
    const url = api + '/getLogTest';
    const response = await axios.get(url, {
      headers: {Authorization: 'Basic 8c74efc6bd0bb10200d38237e1905d6b'},
    });
    console.log('response', response);
  } catch (err) {
    console.log('error', err);
  }
};
