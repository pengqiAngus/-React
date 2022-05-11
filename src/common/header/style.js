import styled from "styled-components";
import logPic from "../../assets/images/logo.png";
export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: solid 1px #f0f0f0;
  position: relative;
`;

export const Logo = styled.a`
  height: 56px;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  background: url(${logPic});
  background-size: contain;
`;
export const Nav = styled.div`
  height: 100%;
  margin: 0 auto;
  width: 80vw;
  padding-right: 60px;
  box-sizing: border-box;
`;
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  pading-bottom: 15px;
  font-size: 17px;
  &.left {
    float: left;
    color: #333;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;
export const NavSearch = styled.input.attrs({ placeholder: "搜索" })`
  width: 160px;
  height: 38px;
  padding: 0 20px;
  border: none;
  outline: none;
  box-sizing: border-box;
  border-radius: 19px;
  background: #eee;
  margin-top: 9px;
  font-size: 14px;
  margin-left: 20px;
  transition: all 0.2s ease-out;
  &.focused {
    transition: all 0.2s ease-out;
    width: 200px;
  }
  &::placeholder {
    color: #999;
  }
`;
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;
export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  border: solid 1px #ec6149;
  margin-right: 20px;
  padding: 0 20px;
  color: #ea6f5a;
  font-size: 14px;
  &.art {
    background: #ea6f5a;
    color: #fff;
  }
`;
export const SearchInfo = styled.div`
  position: absolute;
  top: 56px;
  width: 240px;
  left: 360px;
  padding: 0 20px;
	background:#fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
	 transition: all 0.2s ease-out;
	 display:none;
  &.focused {
    transition: all 0.2s ease-out;
    display:block
  }
  &::
`;
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  marin-bottom: 15px;
  linge-height: 20px;
  font-size: 14px;
  color: #969696;
`;
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  .switch {
    cursor: pointer;
    &:hover {
      color: #ea6f5a;
    }
  }
  .spin {
    margin-right: 2px;
    transition: all 0.2s ease-in;
    transform-origin: center center;
  }
`;
export const SearchInfoItem = styled.a`
  padding: 0 5px;
  line-height: 20px;
  font-size: 12px;
  border: solid 1px #ddd;
  color: #969696;
  border-radius: 2px;
  display: block;
  float: left;
  margin: 5px 5px;
`;
export const SearchInfoList = styled.div`
  overflow: hidden;
`;
