import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { LoginCreator } from "./store/actionCreator";
import { LoginWrapper, LoginBox, Input, Button } from "./style";
class Login extends Component {
  render() {
    if (this.props.login) {
      return <Navigate to="/"></Navigate>;
    } else {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="账号"
              ref={(input) => {
                this.account = input;
              }}
            ></Input>
            <Input
              placeholder="密码"
              type="password"
              ref={(input) => (this.password = input)}
            ></Input>
            <Button
              onClick={() =>
                this.props.handleLogin(this.account, this.password)
              }
            >
              登录
            </Button>
          </LoginBox>
        </LoginWrapper>
      );
    }
  }
}
const mapToState = (state) => {
  return {
    login: state.getIn(["login", "login"]),
  };
};
const mapToDispatch = (dispatch) => {
  return {
    handleLogin(account, password) {
      dispatch(LoginCreator(account.value, password.value));
    },
  };
};
export default connect(mapToState, mapToDispatch)(Login);
