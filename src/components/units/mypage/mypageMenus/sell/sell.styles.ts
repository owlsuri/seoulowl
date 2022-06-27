import styled from "@emotion/styled";

export const SellingSection = styled.div`
  width: 800px;
  background-color: #fff;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SellingTitleArticle = styled.div`
  font-size: 23px;
  font-weight: 600;
  text-align: center;
`;
export const SellingCountArticle = styled.div`
  font-size: 18px;
  text-align: center;
  padding: 20px 0;
  span {
    font-weight: 600;
  }
`;
export const SellingListArticle = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 2px solid #a6a6a6;
  padding-top: 10px;
`;
export const TableHeaderRow = styled.div`
  height: 30px;
  max-width: 1200px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #bdbdbd;
  padding-bottom: 10px;
`;
export const TableHeaderNumber = styled.div`
  width: 100px;
  text-align: center;
  font-weight: 700;
`;
export const TableHeaderDate = styled.div`
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
  width: 150px;
  text-align: center;
  font-weight: 700;
`;
export const Row = styled.div`
  max-width: 800px;
  height: 40px;

  display: flex;
  border-bottom: 1px solid #bdbdbd;

  align-items: center;
`;
export const ColumnNumber = styled.div`
  width: 100px;
  text-align: center;
`;
export const ColumnDate = styled.div`
  width: 150px;
  text-align: center;
`;
export const ColumnName = styled.div`
  width: 300px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ColumnAmount = styled.div`
  width: 150px;
  text-align: center;
`;
export const Pagination = styled.div`
  padding: 20px 0;
`;