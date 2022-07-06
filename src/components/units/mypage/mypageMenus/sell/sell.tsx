import { useQuery } from "@apollo/client";
import { getDate } from "../../../../../commons/libraries/getDate";
import {
  IQuery,
  IQueryFetchPointTransactionsOfSellingArgs,
} from "../../../../../commons/types/generated/types";
import Pagination from "../../../../commons/pagination/Pagination";
import { FETCH_POINT_TRANSACTIONS_OF_SELLING } from "../../mypage.queries";
import * as S from "./sell.styles";

export default function Sell(props) {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfSelling">,
    IQueryFetchPointTransactionsOfSellingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_SELLING);

  const lastPage = Math.ceil(
    props.sellingCount?.fetchPointTransactionsCountOfSelling / 10
  );

  return (
    <S.SellingSection>
      <S.SellingTitleArticle>판매한 상품</S.SellingTitleArticle>
      <S.SellingCountArticle>
        🎊 총
        <span> {props.sellingCount?.fetchPointTransactionsCountOfSelling}</span>
        건 판매하셨습니다.
      </S.SellingCountArticle>
      <S.TableHeaderRow>
        <S.TableHeaderNumber>번호</S.TableHeaderNumber>
        <S.TableHeaderDate>판매일</S.TableHeaderDate>
        <S.TableHeaderName>판매한 상품</S.TableHeaderName>
        <S.TableHeaderAmount>가격</S.TableHeaderAmount>
      </S.TableHeaderRow>
      {data?.fetchPointTransactionsOfSelling.length ? (
        <S.SellingListArticle>
          {data?.fetchPointTransactionsOfSelling.map((el, index) => (
            <S.Row key={el._id}>
              <S.ColumnNumber>{index + 1}</S.ColumnNumber>
              <S.ColumnDate>{getDate(el.useditem.soldAt)}</S.ColumnDate>
              <S.ColumnName>{el.useditem.name}</S.ColumnName>
              <S.ColumnAmount>
                {el.useditem.price.toLocaleString("ko-KR")}원
              </S.ColumnAmount>
            </S.Row>
          ))}
        </S.SellingListArticle>
      ) : (
        <S.SellingListArticleNone>
          아직 판매한 상품이 없습니다😓
        </S.SellingListArticleNone>
      )}
      <S.Pagination>
        <Pagination data={data} refetch={refetch} lastPage={lastPage} />
      </S.Pagination>
    </S.SellingSection>
  );
}
