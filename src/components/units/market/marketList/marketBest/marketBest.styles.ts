import styled from "@emotion/styled";
import { HeartFilled } from "@ant-design/icons";

export const MarketBest = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
`;
export const MarketBestSection = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
  cursor: pointer;
  :hover {
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  }
`;
export const ImageArticle = styled.div`
  width: 230px;
  height: 200px;
`;
export const BestItemImg = styled.img`
  padding-top: 5px;
  position: absolute;
  width: 230px;
  height: 200px;
`;
export const Heart = styled(HeartFilled)`
  position: relative;
  z-index: 1;
  font-size: 25px;
  padding: 18px 0 0 195px;
  color: ${(props) => (props.checked ? "red" : "grey")};
  color: red;
  cursor: pointer;
`;
export const PickedCount = styled.div`
  position: relative;
  z-index: 2;
  top: -27px;
  left: 204px;
  font-size: 15px;
  font-weight: 600;
  color: white;
  opacity: 0;
  :hover {
    opacity: 1;
  }
`;
export const TitleArticle = styled.div`
  width: 230px;
  padding: 10px 0 5px 0;
  border-bottom: 1px solid #bdbdbd;
  font-size: larger;
`;
export const BestMark = styled.span`
  font-weight: 600;
  color: #ffcd2f;
`;
export const Title = styled.span`
  font-size: large;
  font-weight: 600;
  padding-left: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const RemarkArticle = styled.div`
  width: 230px;
  color: #a6a6a6;
  padding: 5px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const PriceArticle = styled.div`
  width: 230px;
  font-size: large;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
