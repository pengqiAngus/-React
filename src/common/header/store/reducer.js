import {
  FOCUSED,
  BLUR,
  GET_HEADER_LIST,
  GET_Data_LIST,
  MOUSE_ENTER,
  MOUSE_LEAVE,
  CHANGE_PAGE,
} from "./actionType";
import { fromJS, get } from "immutable";
const defaultState = fromJS({
  focused: false,
  list: [],
  currentPage: 1,
  totalPage: 1,
  mouseIn: false,
});
export default (state = defaultState, action) => {
  if (action.type === FOCUSED) {
    return state.set("focused", true);
  }
  if (action.type === BLUR) {
    return state.set("focused", false);
  }

  if (action.type === GET_HEADER_LIST) {
    return state.merge({
      list: action.data,
      totalPage: action.totalPage,
    });
  }
  if (action.type === MOUSE_ENTER) {
    return state.set("mouseIn", true);
  }
  if (action.type === MOUSE_LEAVE) {
    return state.set("mouseIn", false);
  }
  if (action.type === CHANGE_PAGE) {
    if (action.currentPage === action.totalPage) {
      return state.set("currentPage", 1);
    }
    return state.set("currentPage", state.get("currentPage") + 1);
  }
  return state;
};
