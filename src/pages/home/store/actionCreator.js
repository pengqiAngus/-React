import axios from "axios";
import { fromJS } from "immutable";
import { GET_HOME_DATA_LIST, GET_MORE_LIST } from "./actionType";

export const getHomeDataListCreator = () => {
  return (dispatch) => {
    axios.get("/api/home.json").then((r) => {
      const action = {
        type: GET_HOME_DATA_LIST,
        topicList: fromJS(r.data.data.topicList),
        articleList: fromJS(r.data.data.articleList),
      };
      dispatch(action);
    });
  };
};
export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get("/api/homeList.json?page=" + page).then((r) => {
      const action = {
        type: GET_MORE_LIST,
        articleList: fromJS(r.data.data),
        page: page + 1,
      };
      dispatch(action);
    });
  };
};
