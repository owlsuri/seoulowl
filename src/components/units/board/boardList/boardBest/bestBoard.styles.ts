import styled from "@emotion/styled";
import { LikeOutlined } from "@ant-design/icons";
import { breakPoints } from "../../../../../commons/styles/media";

export const BestBoardSection = styled.div`
  width: 100%;
`;
export const BestBoardArticle = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  @media ${breakPoints.mobile} {
    overflow: scroll;
    overflow-y: hidden;
  }
  @media ${breakPoints.tablet} {
    overflow: scroll;
    overflow-y: hidden;
  }
`;
export const BestBox = styled.div`
  background: #ffffff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    margin: 5px;
  }
  @media ${breakPoints.tablet} {
    margin: 5px;
  }
`;
export const BestImg = styled.img`
  width: 250px;
  height: 130px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  @media ${breakPoints.mobile} {
    width: 125px;
    height: 65px;
  }
`;
export const Best = styled.div`
  width: 250px;
  height: 110px;
  padding: 10px 15px 10px 15px;
  @media ${breakPoints.mobile} {
    width: 125px;
    height: 55px;
  }
`;
export const TitleBox = styled.span`
  display: flex;
`;
export const SubTitle = styled.span`
  font-size: 16px;
  color: #ffcd2f;
  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;
export const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  padding: 0 0 5px 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media ${breakPoints.mobile} {
    font-size: 12px;
    padding: 0 0 0px 5px;
  }
`;
export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  @media ${breakPoints.mobile} {
    padding-top: 0px;
  }
`;
export const WriterBox = styled.div`
  display: flex;
  align-items: center;
`;
export const WriterImg = styled.img`
  width: 20px;
  height: 20px;
  @media ${breakPoints.mobile} {
    width: 15px;
    height: 15px;
  }
`;
export const WriterName = styled.div`
  font-size: 16px;
  padding-left: 10px;
  @media ${breakPoints.mobile} {
    font-size: 11px;
  }
`;
export const CreatedAt = styled.div`
  font-size: 12px;
  color: #828282;
  padding-top: 5px;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;
export const Like = styled.div`
  color: #6888b2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const BestLikeIcon = styled(LikeOutlined)`
  font-size: 20px;
  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;
export const BestLikeNum = styled.div`
  color: black;
  font-size: 11px;
  padding-top: 5px;
  @media ${breakPoints.mobile} {
    font-size: 7px;
    padding-top: 0px;
  }
`;
