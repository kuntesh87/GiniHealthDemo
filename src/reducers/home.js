export const FETCH_FOODLOG = 'FETCH_FOODLOG';
export const FETCH_FOOD = 'FETCH_FOOD';

const initialState = {
  foodLog: [],
  food: {},
};
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FOODLOG:
      return {
        ...state,
        ...{
          foodLog: action.payload,
        },
      };
    case FETCH_FOOD:
      return {
        ...state,
        ...{
          food: action.payload,
        },
      };
    default:
      return state;
  }
};

export default homeReducer;
