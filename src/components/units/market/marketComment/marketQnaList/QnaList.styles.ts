import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const MarketQnAList = styled.div`
  width: 100%;
`;
export const MarketQnAListSection = styled.div`
  width: 1110px;
  @media ${breakPoints.mobile} {
    width: 320px;
  }
  @media ${breakPoints.tablet} {
    width: 750px;
  }
`;
export const PasswordInput = styled.input`
  width: 200px;
`;
export const MarketQnAListArticle = styled.div`
  width: 1110px;
  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #bdbdbd;
  @media ${breakPoints.mobile} {
    width: 320px;
  }
  @media ${breakPoints.tablet} {
    width: 720px;
  }
`;
export const CommentUserName = styled.div`
  font-weight: 600;
  font-size: 16px;
`;
export const CommentUserInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Comment = styled.div`
  padding-top: 10px;
`;
export const CommentDate = styled.div`
  padding-top: 30px;
`;
export const CommentUserImg = styled.div`
  width: 5.5%;
  padding-bottom: 30px;
  @media ${breakPoints.mobile} {
    display: none;
  }
  @media ${breakPoints.tablet} {
    /* width: 3.5%; */
  }
`;
export const CommentDesc = styled.div``;
export const CommentDescBox = styled.div`
  width: 94.5%;
  padding-top: 20px;
`;
export const CommentIcon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 35px;
`;
export const CommentUserProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const AnswerIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
