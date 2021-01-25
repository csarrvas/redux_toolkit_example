import {
  QUOTE_COUNT
} from '../types';

export const increaseCounter = () => {
  return dispatch => {
    dispatch({
      type: QUOTE_COUNT
    });
  };
};
