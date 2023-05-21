import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
} from '../actionTypes/actionTypes';

export function increment() {
  return {
    type: INCREMENT_COUNTER,
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER,
  };
}