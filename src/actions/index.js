import { ADD_ARTICLE, REMOVE_ARTICLE } from "../constants/action_types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function removeArticle(payload) {
  return { type: REMOVE_ARTICLE, payload};
}

