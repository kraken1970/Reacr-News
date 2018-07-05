import { INCREMENT, DELETE_ARTICLE } from "../constans";
export function increment(params) {
  return {
    type: INCREMENT
  };
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  };
}
