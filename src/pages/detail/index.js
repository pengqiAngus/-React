import React, { PureComponent, useEffect } from "react";
import { DetailWrapper, Header, Content } from "./style";
import { connect } from "react-redux";
import { actionCreator } from "./store";
import { useParams } from "react-router-dom";
const Detail = (props) => {
  const { articleDetail, getArticleDetail } = props;
  let { id } = useParams();
  useEffect(() => {
    getArticleDetail(id);
  }, []);
  return (
    <DetailWrapper>
      <Header>{articleDetail.get("title")}</Header>
      <Content>
        <img src={articleDetail.get("imgUrl")}></img>
        <p>{articleDetail.get("content")}</p>
      </Content>
    </DetailWrapper>
  );
};

const mapToState = (state) => {
  return {
    articleDetail: state.getIn(["detail", "articleDetail"]),
  };
};
const mapToDispatch = (dispatch) => {
  return {
    getArticleDetail(id) {
      dispatch(actionCreator.getArticleDetailCreator(id));
    },
  };
};
export default connect(mapToState, mapToDispatch)(Detail);
