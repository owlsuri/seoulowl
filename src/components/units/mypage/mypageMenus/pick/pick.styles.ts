import { HeartFilled } from "@ant-design/icons";
import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const PickSection = styled.div`
  width: 1000px;
  background-color: #fff;
  border-radius: 20px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${breakPoints.mobile} {
    width: 360px;
  }
  @media ${breakPoints.tablet} {
    width: 760px;
  }
`;
export const PickTitleArticle = styled.div`
  font-size: 23px;
  font-weight: 600;
  text-align: center;
  @media ${breakPoints.mobile} {
    font-size: 21px;
  }
`;
export const PickCountArticle = styled.div`
  font-size: 18px;
  text-align: center;
  padding: 15px 0;
  span {
    font-weight: 600;
  }
  @media ${breakPoints.mobile} {
    font-size: 16px;
  }
`;
export const PickListArticle = styled.div`
  width: 750px;
  @media ${breakPoints.mobile} {
    width: 330px;
  }
`;
export const PickListArticleNone = styled.div`
  width: 750px;
  height: 535px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  @media ${breakPoints.mobile} {
    width: 330px;
  }
`;
export const Sale = styled.div`
  padding: 10px 0;
`;
export const Items = styled.div`
  padding: 10px 0;
  display: flex;
  width: 750px;
  overflow: scroll;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    width: 0rem;
    height: 12px;
  }

  ::-webkit-scrollbar-thumb {
    height: 0rem;
    background: #213e6d90;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #ededed;
  }
  @media ${breakPoints.mobile} {
    width: 330px;
  }
`;
export const Label = styled.div`
  font-size: 20px;
  font-weight: 600;
  padding: 10px 0;
`;
export const Item = styled.div`
  width: 200px;
  margin: 10px;
  cursor: pointer;
  :hover {
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.3);
  }
`;

export const Img = styled.img`
  width: 200px;
  height: 150px;
`;
export const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;
export const Name = styled.div`
  width: 120px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Price = styled.div`
  width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const HeartBox = styled.div`
  height: 50px;
  font-size: 17px;
  color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Heart = styled(HeartFilled)``;
export const PickedCount = styled.div`
  font-size: 13px;
`;
export const Sold = styled.div`
  padding: 10px 0;
`;
export const SoldMark = styled.div`
  background-color: #333;
  color: #fff;
  font-size: small;
  padding: 8px;
  display: flex;
  align-items: center;
`;
