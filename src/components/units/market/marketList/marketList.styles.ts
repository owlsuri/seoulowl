import styled from "@emotion/styled";
import { HeartFilled } from "@ant-design/icons";

export const MarketList = styled.div`
  width: 100%;
  padding: 150px;
  background-image: url(/backgroundImages/night.jpg);
  background-size: cover;
  background-attachment: fixed;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const MarketListSubtitleSection = styled.div`
  text-align: center;
`;
export const MarketListTitleSection = styled.div`
  font-size: 40px;
  color: #ffffff;
  font-weight: 600;
  padding-bottom: 30px;
`;
export const MarketNew = styled.div`
  font-size: 30px;
  width: 60px;
  height: 60px;
  background-color: #ffffff;
  border-radius: 50%;
  text-align: center;
  padding: 10px 0 0 7px;
  cursor: pointer;
  margin-bottom: 50px;
`;
export const MarketListSection = styled.div`
  max-width: 1200px;
  border-radius: 10px;
  background-color: #ffffff;
`;
export const MarketListBestArticle = styled.div`
  max-width: 1200px;
  padding-top: 20px;
`;
export const MarketListArticle = styled.div`
  max-width: 1200px;
`;
export const ListWrapper = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: 280px 280px 280px 280px;
`;
export const MarketLists = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 10px 10px 20px;
  cursor: pointer;
  :hover {
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  }
`;
export const ImageArticle = styled.div`
  width: 230px;
  height: 200px;
  overflow: hidden;
`;
export const ItemImg = styled.img`
  padding-top: 5px;
  position: absolute;
  width: 230px;
  height: 200px;
`;
export const HeartBox = styled.div`
  position: relative;
  height: 50px;
  font-size: 25px;
  color: red;
  z-index: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: end;
  left: 10px;
`;
export const Heart = styled(HeartFilled)`
  cursor: pointer;
`;
export const PickedCount = styled.div`
  position: relative;
  width: 20px;
  text-align: center;
  z-index: 2;
  right: 22px;
  font-size: 15px;
  font-weight: 600;
  color: white;
  opacity: 0;
  :hover {
    opacity: 1;
  }
`;
export const TitleArticle = styled.div`
  padding: 10px 0 5px 0;
  border-bottom: 1px solid #bdbdbd;
  width: 230px;
  font-size: larger;
`;
export const Title = styled.span`
  width: 220px;
  font-size: large;
  font-weight: 600;
  padding-left: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const RemarkArticle = styled.div`
  width: 220px;
  color: #a6a6a6;
  padding: 5px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const PriceArticle = styled.div`
  width: 220px;
  font-size: large;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const BackTop = styled.div`
  padding-left: 30px;
  .site-back-top-basic {
    color: rgba(64, 64, 64, 1);
  }
`;
