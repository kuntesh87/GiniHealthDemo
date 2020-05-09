import {getLogTest} from '../../Api/Api';
import {FETCH_FOODLOG,FETCH_FOOD} from '../../reducers/home';

const updateFoodLog = (foodLog) => ({
  type: FETCH_FOODLOG,
  payload: foodLog,
});

export const fetchFoodlog = () => async (dispatch, getState) => {
  try {
    const foodLog = await getLogTest();
    dispatch(updateFoodLog(foodLog));
  } catch (error) {
    console.log('fetchFoodlog Error: ', error);
  }
};

const updateFood = (food) => ({
  type: FETCH_FOOD,
  payload: food,
});

export const fetchFood = (food) => async (dispatch, getState) => {
  try {
    dispatch(updateFood(food));
  } catch (error) {
    console.log('fetchFood Error: ', error);
  }
};
