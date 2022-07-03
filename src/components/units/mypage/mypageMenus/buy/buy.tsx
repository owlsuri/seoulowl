import { useQuery } from "@apollo/client";
import { getDate } from "../../../../../commons/libraries/getDate";
import {
  IQuery,
  IQueryFetchPointTransactionsOfBuyingArgs,
} from "../../../../../commons/types/generated/types";
import Pagination from "../../../../commons/pagination/Pagination";
import { FETCH_POINT_TRANSACTIONS_OF_BUYING } from "../../mypage.queries";
import * as S from "./buy.styles";

export default function Buy(props: any) {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfBuying">,
    IQueryFetchPointTransactionsOfBuyingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_BUYING);

  const lastPage = Math.ceil(
    props.buyingCount?.fetchPointTransactionsCountOfBuying / 10
  );

  return (
    <S.BuyingSection>
      <S.BuyingTitleArticle>구매한 상품</S.BuyingTitleArticle>
      <S.BuyingCountArticle>
        🎁 총
        <span> {props.buyingCount?.fetchPointTransactionsCountOfBuying}</span>건
        구매하셨습니다.
      </S.BuyingCountArticle>
      <S.TableHeaderRow>
        <S.TableHeaderNumber>번호</S.TableHeaderNumber>
        <S.TableHeaderDate>구매일</S.TableHeaderDate>
        <S.TableHeaderName>구매한 상품</S.TableHeaderName>
        <S.TableHeaderAmount>가격</S.TableHeaderAmount>
      </S.TableHeaderRow>
      {data?.fetchPointTransactionsOfBuying.length ? (
        <S.BuyingListArticle>
          {data?.fetchPointTransactionsOfBuying.map((el, index) => (
            <S.Row key={el._id}>
              <S.ColumnNumber>{index + 1}</S.ColumnNumber>
              <S.ColumnDate>{getDate(el.useditem.soldAt)}</S.ColumnDate>
              <S.ColumnName>{el.useditem.name}</S.ColumnName>
              <S.ColumnAmount>
                {el.useditem.price.toLocaleString("ko-KR")}원
              </S.ColumnAmount>
            </S.Row>
          ))}
        </S.BuyingListArticle>
      ) : (
        <S.BuyingListArticleNone>
          구매한 상품이 없습니다🤨
        </S.BuyingListArticleNone>
      )}
      <S.Pagination>
        <Pagination data={data} refetch={refetch} lastPage={lastPage} />
      </S.Pagination>
    </S.BuyingSection>
  );
}
