import React, { PureComponent } from "react";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import { connect } from "react-redux";
import { actionCreator } from "./store";
class Home extends PureComponent {
  handleScollTop() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <HomeWrapper>
          <HomeLeft>
            <img
              className="banner-img"
              src="https://upload.jianshu.io/admin_banners/web_images/5055/348f9e194f4062a17f587e2963b7feb0b0a5a982.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            />
            <Topic />
            <List />
          </HomeLeft>
          <HomeRight>
            <Recommend />
            <Writer />
          </HomeRight>
          {this.props.showScoll ? (
            <BackTop onClick={this.handleScollTop}>BackTop</BackTop>
          ) : null}
        </HomeWrapper>
      </div>
    );
  }
  componentDidMount() {
    this.props.getHomeDataList();
    this.bindEvent();
  }
  bindEvent() {
    window.addEventListener("scroll", this.props.changeScollShow);
  }
}

const mapToState = (state) => {
  return {
    showScoll: state.getIn(["home", "showScoll"]),
  };
};
const mapToDispatch = (dispatch) => {
  return {
    getHomeDataList() {
      dispatch(actionCreator.getHomeDataListCreator());
    },
    // changeScollShow(e) {
    //   console.log(document.body.scrollTo);
    // },
  };
};
export default connect(mapToState, mapToDispatch)(Home);
