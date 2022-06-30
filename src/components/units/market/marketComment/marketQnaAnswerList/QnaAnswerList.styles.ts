import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const QnaAnswerList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media ${breakPoints.tablet} {
    justify-content: flex-start;
  }
`;
export const Arrow = styled.div`
  padding: 60px 0 0 50px;
  @media ${breakPoints.mobile} {
    padding: 60px 0 0 5px;
  }
  @media ${breakPoints.tablet} {
    padding: 60px 20px 0 5px;
  }
`;
export const QnaAnswerListSection = styled.div`
  width: 1000px;
  @media ${breakPoints.mobile} {
    width: 280px;
  }
  @media ${breakPoints.tablet} {
    width: 200px;
  }
`;
export const QnaAnswerListArticle = styled.div`
  width: 980px;
  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  @media ${breakPoints.mobile} {
    width: 260px;
  }
  @media ${breakPoints.tablet} {
    width: 670px;
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
`;
export const CommentDesc = styled.div``;
export const CommentDescBox = styled.div`
  width: 94.5%;
  padding-top: 20px;
  @media ${breakPoints.mobile} {
    width: 85%;
    padding-top: 10px;
  }
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
