import { ADD_REVIEW } from './../../../redux/actionTypes/reviews';

export interface ReviewFormProps {
  dispatch: Function;
}

export interface ReviewFormState {
  name: string;
  review: string;
}

interface AddReviewAction {
  type: typeof ADD_REVIEW;
  payload: {
    name: string;
    review: string;
  };
}

export type ReviewsActionTypes = AddReviewAction;
