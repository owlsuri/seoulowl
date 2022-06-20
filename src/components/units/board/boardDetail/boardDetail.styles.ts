import styled from "@emotion/styled";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";

export const BoardDetailSection = styled.div`
  width: 100%;
  padding: 150px;
  background-image: url(/backgroundImages/night.jpg);
  background-size: cover;
`;
export const BoardDetailArticle = styled.div`
  max-width: 1200px;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 30px;
`;
export const UserInfoContainer = styled.div`
  max-width: 1200px;
  background-color: #ffffff;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
`;
export const UserImg = styled.img`
  width: 40px;
  height: 40px;
`;
export const UserInfo = styled.div`
  display: flex;
  padding-top: 5px;
`;
export const WriteInfo = styled.div`
  padding-left: 10px;
`;
export const Writer = styled.div`
  font-size: 17px;
  font-weight: 600;
`;
export const CreatedAt = styled.div`
  font-size: 14px;
  color: #a6a6a6;
`;
export const Location = styled.img`
  width: 25px;
  height: 25px;
`;
export const ContentsContainer = styled.div`
  border-bottom: 1px solid #bdbdbd;
  padding: 30px 0;
`;
export const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  word-break: break-all;
`;
export const Images = styled.div`
  padding: 20px 0;
`;
export const Img = styled.img`
  width: 100%;
`;
export const Contents = styled.div`
  width: 100%;
  padding: 30px 0;
  font-size: 16px;
  word-break: break-all;
`;
export const Youtube = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Buttons = styled.div`
  padding-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Btn = styled.button`
  margin: 15px;
  border: none;
  width: 200px;
  height: 50px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  :hover {
    background-color: #213e6d;
    color: #ffffff;
  }
`;
export const LikeBox = styled.div`
  padding: 100px 0 50px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const Like = styled.div`
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #6888b2;
  cursor: pointer;
`;
export const LikeIcon = styled(LikeOutlined)`
  font-size: 30px;
  color: #6888b2;
`;
export const LikeNum = styled.div`
  padding-top: 5px;
  font-weight: 600;
  color: #6888b2;
`;
export const DisLike = styled.div`
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #828282;
  cursor: pointer;
`;
export const DisLikeNum = styled.div`
  padding-top: 5px;
  font-weight: 600;
`;
export const DisLikeIcon = styled(DislikeOutlined)`
  font-size: 30px;
  color: #828282;
`;
