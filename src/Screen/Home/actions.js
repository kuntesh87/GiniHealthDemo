import {getLogTest} from '../../Api/Api';
import {FETCH_FOODLOG} from '../../reducers/home';

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
