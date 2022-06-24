import styled from "@emotion/styled";
import { HeartFilled } from "@ant-design/icons";
import { IMarketReadStyleProps } from "./marketDeatil.types";

export const MarketDetail = styled.div`
  width: 100%;
  padding: 150px;
  background-image: url(/backgroundImages/wall.jpg);
  background-size: cover;
  background-attachment: fixed;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MarketDetailSection = styled.div`
  max-width: 1200px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 30px;
`;
export const MarketDetailSectionDiv = styled.div`
  display: flex;
`;
export const MarketDetailImgArticle = styled.div`
  width: 600px;
  height: 450px;
  background-image: url(/images/noimages.jpg);
  background-size: cover;
  background-position: center;
`;
export const MarketDetailInfoArticle = styled.div`
  padding-left: 40px;
`;
export const Remarks = styled.div`
  color: #a6a6a6;
  font-size: 18px;
`;
export const Name = styled.div`
  font-size: 22px;
  font-weight: 700;
`;
export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #c0c0c0;
  padding: 20px 0;
  margin-bottom: 30px;
`;
export const Tag = styled.div`
  font-weight: 600;
  padding: 5px 10px;
  background: #ffe004;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
export const Price = styled.div`
  font-size: 18px;
  color: #213e6d;
  font-weight: 600;
  padding-top: 10px;
`;
export const Contents = styled.div`
  height: 240px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Buttons = styled.div`
  padding: 20px 0;
`;
export const BuyBtn = styled.button`
  width: 180px;
  height: 50px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  margin: 0 10px;
  cursor: pointer;
  :hover {
    color: #ffffff;
    background-color: #213e6d;
  }
`;
export const Btn = styled.button`
  width: 130px;
  height: 50px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  margin: 0 10px;
  cursor: pointer;
  :hover {
    color: #ffffff;
    background-color: #213e6d;
  }
`;
export const HeartBox = styled.div`
  color: ${(props: IMarketReadStyleProps) => (props.heart ? "red" : "#a6a6a6")};
`;
export const Heart = styled(HeartFilled)`
  padding-right: 7px;
`;
export const MarketMoreDetailArticle = styled.div`
  width: 1140px;
`;
export const Detail = styled.button`
  width: 565px;
  height: 52px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  margin-bottom: 30px;
  cursor: pointer;
  background-color: ${(props: IMarketReadStyleProps) =>
    props.detailColor ? "#6888B2" : ""};
  color: ${(props: IMarketReadStyleProps) =>
    props.detailColor ? "white" : "black"};
`;
export const Qna = styled.button`
  width: 565px;
  height: 52px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  margin-bottom: 30px;
  cursor: pointer;
  background-color: ${(props: IMarketReadStyleProps) =>
    props.qnaColor ? "#6888B2" : ""};
  color: ${(props: IMarketReadStyleProps) =>
    props.qnaColor ? "white" : "black"};
`;
export const DetailImg = styled.img`
  width: 1130px;
  padding: 5px 0;
`;
export const DetailContents = styled.div`
  max-width: 1120px;
  padding: 5px 0;
  word-break: break-all;
`;
export const Label = styled.div`
  font-size: 24px;
  font-weight: 600;
  padding: 20px 0;
  display: flex;
  align-items: center;
`;
export const Pin = styled.img`
  width: 25px;
  margin-right: 7px;
`;
export const MoveBtnArticle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
`;
export const MoveBtn = styled.button`
  width: 220px;
  height: 45px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  margin: 0 10px;
  cursor: pointer;
  :hover {
    color: #ffffff;
    background-color: #213e6d;
  }
`;
