import React, { Component } from "react";
import { ListItem, ListInfo, LearnMore } from "../style";
import { connect } from "react-redux";
import { actionCreator } from "../store";
import { Link } from "react-router-dom";
class List extends Component {
  render() {
    const { articleList, getMoreList, page } = this.props;
    return (
      <div>
        {articleList.map((i, index) => {
          return (
            <Link key={index} to={`/detail/${i.get("id")}`}>
              <ListItem key={index}>
                <img src={i.get("imgUrl")} />
                <ListInfo>
                  <h3>{i.get("title")}</h3>
                  <p>{i.get("desc")}</p>
                </ListInfo>
              </ListItem>
            </Link>
          );
        })}
        <LearnMore
          onClick={() => {
            getMoreList(page);
          }}
        >
          阅读更多
        </LearnMore>
      </div>
    );
  }
}
const mapToState = (state) => {
  return {
    articleList: state.getIn(["home", "articleList"]),
    page: state.getIn(["home", "articlePage"]),
  };
};
const mapToDispatch = (dispatch) => {
  return {
    getMoreList(page) {
      dispatch(actionCreator.getMoreList(page));
    },
  };
};
export default connect(mapToState, mapToDispatch)(List);
