import * as actionTypes from "./actionTypes";

const saveResult = result => {
  return {
    type: actionTypes.STORE_RESULT,
    result
  };
};

export const storeResult = result => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(result));
    }, 2000);
  };
};

export const deleteResult = resultElId => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId
  };
};
