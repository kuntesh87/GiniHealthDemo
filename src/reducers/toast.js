export const UPDATE_TOAST_IS_VISIBLE = 'TOAST/UPDATE_IS_VISIBLE';
export const UPDATE_TOAST_MESSAGE = 'TOAST/UPDATE_MESSAGE';

const initialState = {
  isVisible: false,
  message: '',
};

const toastReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TOAST_IS_VISIBLE:
      return {
        ...state,
        ...{
          isVisible: action.payload,
        },
      };
    case UPDATE_TOAST_MESSAGE:
      return {
        ...state,
        ...{
          message: action.payload,
        },
      };

    default:
      return state;
  }
};

export default toastReducer;
