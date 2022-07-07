import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const MarketQnA = styled.div`
  width: 100%;
  padding: 10px 0;
`;
export const MarketQnASection = styled.div`
  max-width: 1130px;
  @media ${breakPoints.mobile} {
    width: 320px;
  }
  @media ${breakPoints.tablet} {
    width: 730px;
  }
`;
export const MarketQnATitleArticle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;
export const CommentTitle = styled.div`
  font-weight: 600;
  font-size: 18px;
  margin-left: 5px;
`;
export const Star = styled.div`
  margin-left: 20px;
`;
export const MarketQnAInputArticle = styled.div`
  width: 1125px;
  border: 1px solid #bdbdbd;
  @media ${breakPoints.mobile} {
    width: 322px;
  }
  @media ${breakPoints.tablet} {
    width: 722px;
  }
`;
export const CommentInput = styled.textarea`
  width: 1120px;
  height: 110px;
  padding: 10px;
  border: 1px solid #bdbdbd;
  border: none;
  resize: none;
  @media ${breakPoints.mobile} {
    width: 320px;
  }
  @media ${breakPoints.tablet} {
    width: 720px;
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
