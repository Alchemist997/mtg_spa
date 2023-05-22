import { ADD_REVIEW } from './../actionTypes/reviews';

export function addReview<N, R>(name: N, review: R) {
  return {
    type: ADD_REVIEW,
    payload: { name, review },
  };
}
