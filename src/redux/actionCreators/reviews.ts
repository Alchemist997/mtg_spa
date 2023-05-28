import { ADD_REVIEW, SET_LANG, SET_PAGE } from './../actionTypes/reviews';

export const addReview = (name: string, review: string) =>
  <const>{
    type: ADD_REVIEW,
    payload: { name, review },
  };

export const setLang = (lang: string) =>
  <const>{
    type: SET_LANG,
    payload: { lang },
  };

export const setPage = (page: number) =>
  <const>{
    type: SET_PAGE,
    payload: { page },
  };
