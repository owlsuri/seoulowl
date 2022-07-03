import { useQuery } from "@apollo/client";
import {
  FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING,
  FETCH_POINT_TRANSACTIONS_OF_LOADING,
} from "../../mypage.queries";
import { getDate } from "../../../../../commons/libraries/getDate";
import * as S from "./point.styles";
import { useRecoilState } from "recoil";
import {
  IQuery,
  IQueryFetchPointTransactionsOfLoadingArgs,
} from "../../../../../commons/types/generated/types";
import Pagination from "../../../../commons/pagination/Pagination";
import { FETCH_USER_LOGGED_IN } from "../../../login/login.queries";

export default function Point() {
  const { data: userInfo } = useQuery(FETCH_USER_LOGGED_IN);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfLoading">,
    IQueryFetchPointTransactionsOfLoadingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_LOADING);

  const { data: pointCount } = useQuery(
    FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING
  );

  const lastPage = Math.ceil(
    pointCount?.fetchPointTransactionsCountOfLoading / 10
  );

  return (
    <S.PointSection>
      <S.PointTitleArticle>포인트 충전 내역</S.PointTitleArticle>
      <S.PointCurrentArticle>
        💰 포인트를 총{" "}
        <span>{pointCount?.fetchPointTransactionsCountOfLoading}</span>번 충전
        하셨으며, 현재 포인트는{" "}
        <span>
          {userInfo?.fetchUserLoggedIn.userPoint.amount.toLocaleString("ko-KR")}
        </span>
        원 입니다.
      </S.PointCurrentArticle>
      <S.TableHeaderRow>
        <S.TableHeaderNumber>번호</S.TableHeaderNumber>
        <S.TableHeaderDate>충전날짜</S.TableHeaderDate>
        <S.TableHeaderStatus>상세내용</S.TableHeaderStatus>
        <S.TableHeaderAmount>금액</S.TableHeaderAmount>
      </S.TableHeaderRow>
      {data?.fetchPointTransactionsOfLoading.length ? (
        <S.PointListArticle>
          {data?.fetchPointTransactionsOfLoading.map((el, index) => (
            <S.Row key={el._id}>
              <S.ColumnNumber>{index + 1}</S.ColumnNumber>
              <S.ColumnDate>{getDate(el.createdAt)}</S.ColumnDate>
              <S.ColumnStatus>{el.statusDetail}</S.ColumnStatus>
              <S.ColumnAmount>
                {el.amount.toLocaleString("ko-KR")}원
              </S.ColumnAmount>
            </S.Row>
          ))}
        </S.PointListArticle>
      ) : (
        <S.PointListArticleNone>
          포인트 충전내역이 없습니다🙄
        </S.PointListArticleNone>
      )}
      <S.Pagination>
        <Pagination data={data} refetch={refetch} lastPage={lastPage} />
      </S.Pagination>
    </S.PointSection>
  );
}
