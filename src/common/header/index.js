import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
} from "./style";
import { actionCreator } from "./store";
import { render } from "@testing-library/react";
import { Link } from "react-router-dom";
import { logoutCreator } from "../../pages/login/store/actionCreator";
class Header extends PureComponent {
  render() {
    const {
      focused,
      handleSearchFocus,
      handleSearchBlur,
      list,
      currentPage,
      handleMouseEnter,
      handleMouseLeave,
      mouseIn,
      handleChangePage,
      totalPage,
      login,
      logout,
    } = this.props;
    const pageList = [];
    const JSlist = list.toJS();
    if (JSlist.length) {
      for (let i = (currentPage - 1) * 10; i < currentPage * 10; i++) {
        pageList.push(JSlist[i]);
      }
    }
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          {login ? (
            <NavItem onClick={logout} className="right">
              退出
            </NavItem>
          ) : (
            <Link to="/login">
              <NavItem className="right">登录</NavItem>
            </Link>
          )}

          <NavItem className="right">Aa</NavItem>

          <NavSearch
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
            className={focused ? "focused" : ""}
          />
          <SearchInfo
            className={focused || mouseIn ? "focused" : ""}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <SearchInfoTitle>
              热门搜索
              <SearchInfoSwitch
                onClick={() => {
                  handleChangePage(currentPage, totalPage, this.spinIcon);
                }}
              >
                <svg
                  ref={(icon) => {
                    this.spinIcon = icon;
                  }}
                  t="1649856505293"
                  className="spin"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2835"
                  width="12"
                  height="12"
                >
                  <path
                    d="M764.256 194.752l-90.24 90.624C734.496 345.888 768 426.368 768 512c0 176.512-143.488 320-320 320l0-64-128 128 128 128 0-64c247.008 0 448-200.992 448-448C896 392.128 849.248 279.488 764.256 194.752zM576 128l-128-128 0 64C200.992 64 0 264.992 0 512c0 119.872 46.752 232.512 131.744 317.248l90.24-90.624C161.504 678.112 128 597.632 128 512 128 335.488 271.488 192 448 192l0 64L576 128z"
                    p-id="2836"
                    fill="#8a8a8a"
                  ></path>
                </svg>
                <span className="switch">换一批</span>
              </SearchInfoSwitch>
            </SearchInfoTitle>
            {pageList.map((s) => {
              return <SearchInfoItem key={s}>{s}</SearchInfoItem>;
            })}
          </SearchInfo>
        </Nav>
        <Addition>
          <Link to="/write">
            <Button className="art">写文章</Button>
          </Link>
          <Button>注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    currentPage: state.getIn(["header", "currentPage"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    login: state.getIn(["login", "login"]),
  };
};
const mapDispathToProps = (disptach) => {
  return {
    logout() {
      disptach(logoutCreator());
    },
    handleSearchFocus() {
      const action = actionCreator.handleFocusedCreator();
      disptach(action);
      disptach(actionCreator.getHeaderList());
    },
    handleSearchBlur() {
      const action = actionCreator.handleBlurCreator();
      disptach(action);
    },
    handleMouseEnter() {
      disptach(actionCreator.handleMouseEnterCreator());
    },
    handleMouseLeave() {
      disptach(actionCreator.handleMouseLeaveCreator());
    },
    handleChangePage(currentPage, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/gi, "");
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = "rotate(" + (originAngle + 360) + "deg)";
      const action = actionCreator.handleChangePageCreator(
        currentPage,
        totalPage
      );
      disptach(action);
    },
  };
};
export default connect(mapStateToProps, mapDispathToProps)(Header);
