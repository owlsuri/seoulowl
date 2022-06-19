import styled from "@emotion/styled";
import { LikeOutlined } from "@ant-design/icons";

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
`;
export const BestBox = styled.div`
  background: #ffffff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  cursor: pointer;
`;
export const BestImg = styled.img`
  width: 250px;
  height: 130px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
export const Best = styled.div`
  width: 250px;
  height: 110px;
  padding: 10px 15px 10px 15px;
`;
export const TitleBox = styled.span`
  display: flex;
`;
export const SubTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #ffcd2f;
`;
export const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  padding: 0 0 10px 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;
export const WriterBox = styled.div`
  display: flex;
  align-items: center;
`;
export const WriterImg = styled.img`
  width: 20px;
  height: 20px;
`;
export const WriterName = styled.div`
  font-size: 16px;
  padding-left: 10px;
`;
export const CreatedAt = styled.div`
  font-size: 12px;
  color: #828282;
  padding-top: 10px;
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
`;
export const BestLikeNum = styled.div`
  color: black;
  font-size: 11px;
  padding-top: 5px;
`;
