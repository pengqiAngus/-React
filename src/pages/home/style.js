import styled from "styled-components";
export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;
export const HomeLeft = styled.div`
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  float: left;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;
export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -10px;
  border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  margin-bottom: 18px;
  font-size: 14px;
  padding-right: 10px;
  color: #000;
  background: #f7f7f7;
  border: solid 1px #dcdcdc;
  border-radius: 4px;
  img {
    display: block;
    float: left;
    height: 32px;
    width: 32px;
    margin-right: 10px;
  }
`;
export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  img {
    width: 125px;
    height: 100px;
    dispaly: block;
    float: right;
    border-radius: 10px;
  }
`;
export const ListInfo = styled.div`
  padding: 20px 0;
  width: 500px;
  float: left;
  h3 {
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #333;
  }
  p {
    font-size: 13px;
    line-height: 18px;
    color: #999;
  }
`;
export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url("../../../public/assest/imgs/banner-s-3-7123fd94750759acf7eca05b871e9d17.png");
  background-size: contain;
`;
export const LearnMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  margin: 30px 0;
  cursor: pointer;
`;
export const BackTop = styled.div`
  position: fixed;
  width: 60px;
  height: 60px;
  right: 100px;
  bottom: 100px;
  line-height: 60px;
  text-align: center;
  border: 1px soild #ccc;
`;
