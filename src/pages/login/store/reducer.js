import { fromJS, get } from "immutable";
import { LOGIN, CHANGE_LOGIN, LOG_OUT } from "./actionType";
const defaultState = fromJS({
  login: false,
});

export default (state = defaultState, action) => {
  if (action.type === CHANGE_LOGIN) {
    return state.merge({
      login: true,
    });
  }
  if (action.type === LOG_OUT) {
    return state.merge({
      login: false,
    });
  }
  return state;
};
