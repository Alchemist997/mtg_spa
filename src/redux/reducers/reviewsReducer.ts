/* eslint-disable @typescript-eslint/default-param-last */

import reviews from './../../reviews.json';
import { ADD_REVIEW } from './../actionTypes/reviews';
import { ReviewsActionTypes } from './../../components/main/reviewForm/types';

const initialState = {
  ru: reviews.ru,
  en: reviews.en,
  currentLang: 'ru',
};

export default (state = initialState, action: ReviewsActionTypes) => {
  const payload = action.payload;

  switch (action.type) {
    case ADD_REVIEW:
      const name = payload.name;
      const review = payload.review;
      const currentDate = new Date();
      const [y, m, d] = currentDate.toISOString().slice(0, 10).split('-');
      const newReviewId = Object.keys(state.ru).length + 1;

      return {
        ...state,
        ru: {
          ...state.ru,
          [`client_${newReviewId}`]: { name, review, date: `${d}.${m}.${y}` },
        },
      };

    default:
      return state;
  }
};
