import styled from "@emotion/styled";
import { HeartFilled } from "@ant-design/icons";
import { breakPoints } from "../../../../commons/styles/media";

interface IMarketReadStyleProps {
  heart?: boolean;
  detailColor?: boolean;
  qnaColor?: boolean;
}

export const MarketDetail = styled.div`
  width: 100%;
  padding: 150px;
  background-image: url(/backgroundImages/night.jpg);
  background-size: cover;
  background-attachment: fixed;

  display: flex;
  align-items: center;
  justify-content: center;
  @media ${breakPoints.mobile} {
    padding: 200px 0 50px 0;
  }
`;
export const MarketDetailSection = styled.div`
  max-width: 1200px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 50px;
  @media ${breakPoints.mobile} {
    width: 350px;
    padding: 15px;
  }
  @media ${breakPoints.tablet} {
    width: 750px;
    padding: 15px;
  }
`;
export const MarketDetailSectionDiv = styled.div`
  display: flex;
  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
  @media ${breakPoints.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;
export const MarketDetailImgArticle = styled.div`
  width: 550px;
  height: 450px;
  background-image: url(/images/noimages.jpg);
  background-size: cover;
  background-position: center;
  @media ${breakPoints.mobile} {
    width: 320px;
    height: 280px;
  }
`;
export const MarketDetailInfoArticle = styled.div`
  padding-left: 40px;
  @media ${breakPoints.mobile} {
    width: 340px;
    padding: 50px 0 0 0px;
  }
  @media ${breakPoints.tablet} {
    width: 550px;
    padding: 50px 0 0 0px;
  }
`;
export const Remarks = styled.div`
  width: 540px;
  color: #a6a6a6;
  font-size: 18px;
  word-break: break-all;
  @media ${breakPoints.mobile} {
    width: 320px;
    word-break: break-all;
  }
`;
export const Name = styled.div`
  font-size: 22px;
  font-weight: 700;
  @media ${breakPoints.mobile} {
    width: 320px;
    word-break: break-all;
  }
`;
export const Seller = styled.div`
  font-size: 15px;
  color: #a6a6a6;
  padding-top: 5px;
  @media ${breakPoints.mobile} {
    width: 320px;
    word-break: break-all;
  }
`;
export const SellerName = styled.span`
  font-size: 16px;
  font-weight: 600;
  padding-left: 5px;
`;
export const Tags = styled.div`
  width: 540px;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #c0c0c0;
  padding: 20px 0;
  margin-bottom: 30px;
  @media ${breakPoints.mobile} {
    width: 320px;
    word-break: break-all;
  }
`;
export const Tag = styled.div`
  font-weight: 600;
  padding: 5px 10px;
  margin: 5px 0;
  background: #ffe004;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
export const Price = styled.div`
  font-size: 20px;
  color: #213e6d;
  font-weight: 600;
  padding-top: 10px;
`;
export const Contents = styled.div`
  width: 540px;
  height: 240px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media ${breakPoints.mobile} {
    width: 320px;
    word-break: break-all;
  }
`;
export const Buttons = styled.div`
  max-width: 550px;
  padding: 20px 0;
`;
export const BuyBtn = styled.button`
  width: 190px;
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
  @media ${breakPoints.mobile} {
    width: 300px;
    margin: 5px;
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
  @media ${breakPoints.mobile} {
    width: 300px;
    margin: 5px;
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
  @media ${breakPoints.mobile} {
    width: 350px;
  }
  @media ${breakPoints.tablet} {
    width: 740px;
  }
`;
export const Detail = styled.button`
  width: 555px;
  height: 52px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  margin-bottom: 30px;
  word-break: break-all;
  cursor: pointer;
  background-color: ${(props: IMarketReadStyleProps) =>
    props.detailColor ? "#6888B2" : ""};
  color: ${(props: IMarketReadStyleProps) =>
    props.detailColor ? "white" : "black"};

  @media ${breakPoints.mobile} {
    width: 160px;
  }
  @media ${breakPoints.tablet} {
    width: 360px;
  }
`;
export const Qna = styled.button`
  width: 555px;
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

  @media ${breakPoints.mobile} {
    width: 160px;
  }
  @media ${breakPoints.tablet} {
    width: 360px;
  }
`;
export const DetailImg = styled.img`
  width: 97%;
  padding: 5px 0;
  @media ${breakPoints.mobile} {
    width: 320px;
    display: flex;
  }
  @media ${breakPoints.tablet} {
    width: 720px;
    display: flex;
  }
`;
export const DetailContents = styled.div`
  max-width: 1100px;
  padding: 5px 0;
  word-break: break-all;
  @media ${breakPoints.mobile} {
    width: 320px;
    word-break: break-all;
  }
  @media ${breakPoints.tablet} {
    width: 720px;
    word-break: break-all;
  }
`;
export const Label = styled.div`
  font-size: 24px;
  font-weight: 600;
  padding: 20px 0;
  display: flex;
  align-items: center;
  @media ${breakPoints.mobile} {
    font-size: 18px;
  }
`;
export const Pin = styled.img`
  width: 25px;
  margin-right: 7px;
  @media ${breakPoints.mobile} {
    width: 20px;
  }
`;
export const MoveBtnArticle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
  @media ${breakPoints.mobile} {
    padding: 60px 0 30px 0;
  }
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
