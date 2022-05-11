import { GET_ARTICLE_DETAIL } from "./actionType";
import { fromJS, get } from "immutable";
const defaultState = fromJS({
  articleDetail: {
    title: "",
    imgUrl: "",
    content: "",
  },
});
export default (state = defaultState, action) => {
  if (action.type === GET_ARTICLE_DETAIL) {
    return state.merge({
      articleDetail: action.data,
    });
  }
  return state;
};
