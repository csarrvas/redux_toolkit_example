import {
  INCREASING_COUNT
} from '../types';

export const increaseCounter = () => {
  return {
    type: INCREASING_COUNT
  };
};
