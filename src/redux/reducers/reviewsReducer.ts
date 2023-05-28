/* eslint-disable @typescript-eslint/default-param-last */

import reviews from './../../reviews.json';
import { ADD_REVIEW, SET_LANG, SET_PAGE } from './../actionTypes/reviews';

import * as actions from './../actionCreators/reviews';
type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
type ReviewsActionTypes = ReturnType<InferValueTypes<typeof actions>>;

const initialState = {
  ru: reviews.ru,
  en: reviews.en,
  currentLang: 'ru',
  currentPage: 1,
};

export default (state = initialState, action: ReviewsActionTypes) => {
  switch (action.type) {
    case ADD_REVIEW:
      const name = action.payload.name;
      const review = action.payload.review;
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

    case SET_LANG:
      return {
        ...state,
        currentLang: action.payload.lang,
        currentPage: 1,
      };

    case SET_PAGE:
      return {
        ...state,
        currentPage: action.payload.page,
      };

    default:
      return state;
  }
};
