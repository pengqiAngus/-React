import {
  FOCUSED,
  BLUR,
  GET_HEADER_LIST,
  MOUSE_ENTER,
  MOUSE_LEAVE,
  CHANGE_PAGE,
} from "./actionType";
import { fromJS } from "immutable";
import axios from "axios";
export const handleFocusedCreator = () => {
  return {
    type: FOCUSED,
  };
};
export const handleBlurCreator = () => {
  return {
    type: BLUR,
  };
};
export const handleMouseEnterCreator = () => {
  return {
    type: MOUSE_ENTER,
  };
};
export const handleMouseLeaveCreator = () => {
  return {
    type: MOUSE_LEAVE,
  };
};
export const handleChangePageCreator = (currentPage, totalPage) => {
  return {
    type: CHANGE_PAGE,
    currentPage,
    totalPage,
  };
};
export const getHeaderList = () => {
  return (disptach) => {
    axios
      .get("/api/headerList.json")
      .then((res) => {
        const action = {
          type: GET_HEADER_LIST,
          data: fromJS(res.data.data),
          totalPage: Math.ceil(res.data.data.length / 10),
        };
        disptach(action);
      })
      .catch((e) => {
        alert(e.message);
      });
  };
};
