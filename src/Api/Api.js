import axios from 'axios';

const api = 'https://us-central1-gini-v0.cloudfunctions.net';


//analyseNutritionixTest is not working so i update with analysisNutritionixTest

export const getAnalysisForFood = async (food) => {
  try {
    const {data} = food;
    const url = api + '/analysisNutritionixTest';
    const response = await axios.post(
      url,
      {data},
      {
        headers: {Authorization: 'Basic 8c74efc6bd0bb10200d38237e1905d6b'},
      },
    );
    console.log('response', response);
    return response.data;
  } catch (err) {
    console.log('error', err);
  }
};

// get current log
export const getLogTest = async () => {
  try {
    const url = api + '/getLogTest';
    const response = await axios.get(url, {
      headers: {Authorization: 'Basic 8c74efc6bd0bb10200d38237e1905d6b'},
    });
    return response.data;
  } catch (err) {
    console.log('error', err);
  }
};

// add food test
export const logFoodTest = async (data) => {
  try {
    const url = api + '/logFoodTest';
    const response = await axios.post(
      url,
      {data},
      {
        headers: {Authorization: 'Basic 8c74efc6bd0bb10200d38237e1905d6b'},
      },
    );
    return response;
  } catch (err) {
    console.log('error', err);
  }
};

export const deleteLogTest = async (id) => {
  try {
    const url = api + '/deleteLogTest';
    const response = await axios.post(
      url,
      {id},
      {
        headers: {Authorization: 'Basic 8c74efc6bd0bb10200d38237e1905d6b'},
      },
    );
    console.log('delete response', response);
    return response;
  } catch (err) {
    console.log('error', err);
  }
};

export const updateLogTest = async () => {
  try {
    const url = api + '/updateLogTest';
    const response = await axios.get(url, {
      headers: {Authorization: 'Basic 8c74efc6bd0bb10200d38237e1905d6b'},
    });
    console.log('response', response);
    return response;
  } catch (err) {
    console.log('error', err);
  }
};
