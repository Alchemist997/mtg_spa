/* eslint-disable @typescript-eslint/default-param-last */

import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
} from '../actionTypes/actionTypes';
import { CounterActionTypes } from '../../components/counter/types';

const initialState = {
  value: 0,
};

export default (state = initialState, action: CounterActionTypes) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, value: state.value + 1 };

    case DECREMENT_COUNTER:
      return { ...state, value: state.value - 1 };

    default:
      return state;
  }
};
