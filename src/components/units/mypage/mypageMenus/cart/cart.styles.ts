import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const CartSection = styled.div`
  width: 1000px;
  background-color: #fff;
  border-radius: 20px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${breakPoints.mobile} {
    width: 360px;
  }
  @media ${breakPoints.tablet} {
    width: 760px;
  }
`;
export const CartTitleArticle = styled.div`
  font-size: 23px;
  font-weight: 600;
  text-align: center;
  @media ${breakPoints.mobile} {
    font-size: 21px;
  }
`;
export const CartCountArticle = styled.div`
  font-size: 18px;
  text-align: center;
  padding: 20px 0;
  span {
    font-weight: 600;
  }
  @media ${breakPoints.mobile} {
    font-size: 16px;
  }
`;
export const CartList = styled.div`
  width: 750px;
  height: 560px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${breakPoints.mobile} {
    width: 330px;
  }
`;
export const CartListArticle = styled.div`
  width: 730px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  overflow: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 8px;
    height: 12px;
  }

  ::-webkit-scrollbar-thumb {
    height: 0rem;
    background: #213e6d90;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #ededed;
  }
  @media ${breakPoints.mobile} {
    width: 330px;
  }
`;
export const CartListArticleNone = styled.div`
  width: 730px;
  height: 400px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${breakPoints.mobile} {
    width: 330px;
  }
`;
export const TableHeaderRow = styled.div`
  height: 30px;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #bdbdbd;
  border-top: 2px solid #bdbdbd;
  padding: 20px 20px 20px 0;
  @media ${breakPoints.mobile} {
    width: 330px;
  }
`;
export const TableHeaderNumber = styled.div`
  width: 80px;
  text-align: center;
  font-weight: 700;
`;
export const TableHeaderImage = styled.div`
  width: 150px;
  text-align: center;
  font-weight: 700;
`;
export const TableHeaderName = styled.div`
  width: 300px;
  text-align: center;
  font-weight: 700;
`;
export const TableHeaderAmount = styled.div`
  width: 140px;
  text-align: center;
  font-weight: 700;
`;
export const TableHeaderCheck = styled.div`
  width: 30px;
  text-align: center;
  font-weight: 700;
`;
export const Row = styled.div`
  max-width: 800px;
  height: 70px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  @media ${breakPoints.mobile} {
    width: 330px;
  }
`;
export const ColumnNumber = styled.div`
  width: 80px;
  text-align: center;
`;
export const ColumnImage = styled.div`
  width: 150px;
  text-align: center;
`;
export const ColumnName = styled.div`
  width: 300px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 7px;
`;
export const ColumnAmount = styled.div`
  width: 140px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ColumnCheck = styled.input`
  width: 30px;
  text-align: center;
`;
export const ButtonArticle = styled.div`
  padding: 30px 0 55px 0;
`;
export const PayBtn = styled.button`
  width: 200px;
  height: 40px;
  margin-right: 20px;
  border: none;
  background-color: #213e6d;
  color: #ffcd2f;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;
export const DeleteBtn = styled.button`
  width: 200px;
  height: 40px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;
export const ItemImg = styled.img`
  width: 78px;
  height: 60px;
  cursor: pointer;
`;
