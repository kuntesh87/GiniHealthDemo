import * as Types from '../reducers/toast';

const updateIsVisible = (isVisible) => ({
  type: Types.UPDATE_TOAST_IS_VISIBLE,
  payload: isVisible,
});

const updateMessage = (message) => ({
  type: Types.UPDATE_TOAST_MESSAGE,
  payload: message,
});

export const openToast = (message) => async (dispatch) => {
  dispatch(updateMessage(message));
  dispatch(updateIsVisible(true));
};

export const closeToast = () => async (dispatch) => {
  dispatch(updateIsVisible(false));
};
