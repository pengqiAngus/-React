import axios from "axios";
import { fromJS } from "immutable";
import { GET_ARTICLE_DETAIL } from "./actionType";
export const getArticleDetailCreator = (id) => {
  return (dispatch) => {
    axios.get("/api/detail.json?id=" + id).then((r) => {
      const action = {
        type: GET_ARTICLE_DETAIL,
        data: fromJS(r.data.articleDetial),
      };
      dispatch(action);
    });
  };
};
