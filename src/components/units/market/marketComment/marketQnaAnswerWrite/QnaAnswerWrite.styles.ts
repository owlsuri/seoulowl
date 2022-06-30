import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const QnaAnswerWrite = styled.div`
  width: 1100px;
  padding: 20px 0 20px 70px;
  @media ${breakPoints.mobile} {
    width: 320px;
    padding: 20px 0;
  }
  @media ${breakPoints.tablet} {
    width: 720px;
    padding: 20px 0;
  }
`;
export const QnaAnswerWriteSection = styled.div`
  display: flex;
`;
export const QnaAnswerWriteTitleArticle = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 20px;
  margin-right: 20px;
  @media ${breakPoints.mobile} {
    padding-left: 0px;
    margin-right: 5px;
  }
`;
export const QnaAnswerWriteInputArticle = styled.div`
  width: 970px;
  border: 1px solid #bdbdbd;
`;
export const CommentInput = styled.textarea`
  width: 968px;
  height: 108px;
  padding: 10px;
  border: 1px solid #bdbdbd;
  color: #bdbdbd;
  border: none;
  resize: none;
  @media ${breakPoints.mobile} {
    width: 290px;
  }
  @media ${breakPoints.tablet} {
    width: 650px;
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
