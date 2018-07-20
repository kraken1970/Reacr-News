import { normalizedArticles as defaultArticles } from "../fixtures";
import { arrToMap } from "../helpers";
import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES } from "../constans";
import { Map, Record } from "immutable";

const ArticleRecord = Record({
  text: undefined,
  title: "",
  id: undefined,
  comments: []
});

const defaultState = new Map({});

export default (articleState = defaultState, action) => {
  const { type, payload, response, randomId } = action;

  switch (type) {
    case DELETE_ARTICLE:
      return articleState.delete(payload.id);

    case ADD_COMMENT:
      return articleState.updateIn([payload.article.id, "comments"], comments =>
        comments.concat(randomId)
      );
    case LOAD_ALL_ARTICLES:
      return arrToMap(response, ArticleRecord);

    default:
      console.log("type:", type);
  }

  return articleState;
};
