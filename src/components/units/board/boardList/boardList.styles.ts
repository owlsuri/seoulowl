import styled from "@emotion/styled";

export const BoardListSection = styled.div`
  background-image: url(/backgroundImages/wall.jpg);
  background-size: cover;
  background-attachment: fixed;

  padding: 150px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BoardSubTitleArticle = styled.div`
  font-size: 15px;
  padding: 5px;
`;
export const BoardTitleArticle = styled.div`
  width: 100%;
  max-width: 1200px;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  color: #ffffff;
  padding-bottom: 30px;
`;
export const BoardNew = styled.div`
  font-size: 30px;
  width: 60px;
  height: 60px;
  background-color: #ffffff;
  border-radius: 50%;
  text-align: center;
  padding: 10px 0 0 7px;
  cursor: pointer;
`;
export const BestBoardArticle = styled.div`
  width: 100%;
  max-width: 1200px;
  padding-top: 40px;
`;
export const SearchBarArticle = styled.div`
  width: 100%;
  max-width: 1200px;
`;
export const BoardListArticle = styled.div`
  width: 100%;
  max-width: 1200px;
  border-top: 2px solid black;
  padding-top: 10px;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 30px;
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
  width: 120px;
  text-align: center;
  font-weight: 700;
`;
export const TableHeaderTitle = styled.div`
  width: 500px;
  text-align: center;
  font-weight: 700;
`;
export const TableHeaderWriter = styled.div`
  width: 300px;
  text-align: center;
  font-weight: 700;
`;
export const TableHeaderDate = styled.div`
  width: 200px;
  text-align: center;
  font-weight: 700;
`;
export const Row = styled.div`
  max-width: 1200px;
  height: 40px;

  display: flex;
  border-bottom: 1px solid #bdbdbd;

  align-items: center;
  :hover {
    color: #6888b2;
    font-weight: 600;
    cursor: pointer;
  }
`;
export const ColumnTitle = styled.div`
  width: 500px;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ColumnNumber = styled.div`
  width: 120px;
  text-align: center;
`;
export const ColumnWriter = styled.div`
  width: 300px;
  text-align: center;
`;
export const ColumnDate = styled.div`
  width: 200px;
  text-align: center;
`;
export const Word = styled.span`
  color: ${(props) => (props.isMatched ? "orange" : "")};
`;
export const Pagination = styled.div`
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
`;
