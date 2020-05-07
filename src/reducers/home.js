export const FETCH_FOODLOG = 'FETCH_FOODLOG';

const initialState = {
  foodLog: [],
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
    default:
      return state;
  }
};

export default homeReducer;
