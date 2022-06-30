import { HeartFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

export const PickSection = styled.div`
  width: 800px;
  background-color: #fff;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PickTitleArticle = styled.div`
  font-size: 23px;
  font-weight: 600;
  text-align: center;
`;
export const PickCountArticle = styled.div`
  font-size: 18px;
  text-align: center;
  padding: 15px 0;
  span {
    font-weight: 600;
  }
`;
export const PickListArticle = styled.div`
  width: 750px;
`;
export const PickListArticleNone = styled.div`
  width: 750px;
  height: 535px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
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
  font-weight: 600;
`;
export const Price = styled.div``;
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
