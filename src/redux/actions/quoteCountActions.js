import {
  INCREASING_COUNT
} from '../types';

export const increaseCounter = () => {
  return dispatch => {
    dispatch({
      type: INCREASING_COUNT
    });
  };
};
