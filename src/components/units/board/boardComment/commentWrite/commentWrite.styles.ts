import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const CommentWrite = styled.div`
  width: 100%;
  padding-top: 20px;
`;
export const CommentWriteSection = styled.div`
  max-width: 100%;
`;
export const CommentTitleArticle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const CommentTitle = styled.div`
  font-weight: 600;
  font-size: 18px;
  padding-left: 10px;
`;
export const CommentStarArticle = styled.div`
  padding-left: 10px;
  @media ${breakPoints.mobile} {
    padding: 10px;
  }
`;
export const CommentInputArticle = styled.div`
  width: 100%;
  border: 1px solid #bdbdbd;
`;
export const CommentInput = styled.textarea`
  width: 100%;
  height: 108px;
  padding: 10px;
  border: 1px solid #bdbdbd;
  border: none;
`;
export const CommentUserArticle = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 0;
  @media ${breakPoints.mobile} {
    width: 360px;
    flex-direction: column;
  }
  @media ${breakPoints.tablet} {
    width: 730px;
  }
`;
export const CommentUserInput = styled.input`
  width: 180px;
  height: 45px;
  margin-right: 20px;
  padding: 10px;
  border: 1px solid #bdbdbd;
  @media ${breakPoints.mobile} {
    width: 330px;
    margin-bottom: 5px;
  }
`;
export const CommentInputBottom = styled.div`
  border-top: 1px solid #bdbdbe;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const CommentCount = styled.div`
  padding: 12px 0 0 10px;
  width: 180px;
  height: 52px;
  color: #bdbdbd;
  font-size: 16px;
`;
export const CommentInputBtn = styled.button`
  width: 91px;
  height: 52px;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
`;
