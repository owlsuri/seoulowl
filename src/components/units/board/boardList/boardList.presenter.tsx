import { getDate } from "../../../../commons/libraries/getDate";
import SearchBars01 from "../../../commons/searchBars/01/searchBars01.container";
import * as S from "./boardList.styles";
import BestBoard from "./boardListSrc/bestBoard/bestBoard.container";
import { v4 as uuidv4 } from "uuid";
import Pagination from "../../../commons/pagination/Pagination";
import { IBoardListUIProps } from "./boardList.types";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <S.BoardListSection>
      <S.BoardSubTitleArticle>😁🤬🥰😥</S.BoardSubTitleArticle>
      <S.BoardTitleArticle>수다방</S.BoardTitleArticle>
      <S.BestBoardArticle>
        <BestBoard />
      </S.BestBoardArticle>
      <S.SearchBarArticle>
        <SearchBars01
          refetch={props.refetch}
          refetchBoardsCount={props.refetchBoardsCount}
          onChangeKeyword={props.onChangeKeyword}
        />
      </S.SearchBarArticle>
      <S.BoardListArticle>
        <div>
          <S.TableHeaderRow>
            <S.TableHeaderNumber>번호</S.TableHeaderNumber>
            <S.TableHeaderTitle>제목</S.TableHeaderTitle>
            <S.TableHeaderWriter>작성자</S.TableHeaderWriter>
            <S.TableHeaderDate>날짜</S.TableHeaderDate>
          </S.TableHeaderRow>
          <>
            {props.data?.fetchBoards.map((el: any, index: number) => (
              <S.Row key={el._id}>
                <S.ColumnNumber>{10 - index}</S.ColumnNumber>
                <S.ColumnTitle id={el._id} onClick={props.onClickDetail}>
                  {el.title
                    .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                    .split("#$%")
                    .map((el: any) => (
                      <S.Word key={uuidv4()} isMatched={props.keyword === el}>
                        {el}
                      </S.Word>
                    ))}
                </S.ColumnTitle>
                <S.ColumnWriter>{el.writer}</S.ColumnWriter>
                <S.ColumnDate>{getDate(el.createdAt)}</S.ColumnDate>
              </S.Row>
            ))}
          </>
        </div>
        <S.Pagination>
          <Pagination
            data={props.data}
            refetch={props.refetch}
            lastPage={props.lastPage}
          />
        </S.Pagination>
      </S.BoardListArticle>
    </S.BoardListSection>
  );
}