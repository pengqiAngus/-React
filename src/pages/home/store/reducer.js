import { fromJS, get } from "immutable";
import { GET_HOME_DATA_LIST, GET_MORE_LIST } from "./actionType";
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  articlePage: 1,
  showScoll: false,
});

const getMoreList = (state, action) => {
  return state.merge({
    articleList: state.get("articleList").concat(action.articleList),
    articlePage: action.page,
  });
};

export default (state = defaultState, action) => {
  if (action.type === GET_HOME_DATA_LIST) {
    return state.merge({
      topicList: action.topicList,
      articleList: action.articleList,
    });
  }
  if (action.type === GET_MORE_LIST) {
    return getMoreList(state, action);
  }
  return state;
};
