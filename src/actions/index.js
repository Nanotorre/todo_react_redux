import { ADD_ARTICLE } from "../constants/action_types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}