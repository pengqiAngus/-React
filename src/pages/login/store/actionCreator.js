import axios from "axios";
import { fromJS, get } from "immutable";
import { LOGIN, CHANGE_LOGIN, LOG_OUT } from "./actionType";
const changeLogin = () => {
  return {
    type: CHANGE_LOGIN,
  };
};
export const LoginCreator = (account, password) => {
  return (dispatch) => {
    axios
      .get("/api/login.json?account=" + account + "&password=" + password)
      .then((r) => {
        const res = r.data.data;
        if (res) {
          dispatch(changeLogin());
        } else {
          alert("登录失败");
        }
      });
  };
};
export const logoutCreator = () => {
  return {
    type: LOG_OUT,
  };
};
