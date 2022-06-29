import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchPointTransactionsArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_POINT_TRANSACTIONS } from "../../mypage.queries";
import { getDate } from "../../../../../commons/libraries/getDate";
import * as S from "./point.styles";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../../commons/store";

export default function Point() {
  const [userInfo] = useRecoilState(userInfoState);
  const { data } = useQuery<
    Pick<IQuery, "fetchPointTransactions">,
    IQueryFetchPointTransactionsArgs
  >(FETCH_POINT_TRANSACTIONS);

  return (
    <S.PointSection>
      <S.PointTitleArticle>포인트 이용 내역(최근 10건)</S.PointTitleArticle>
      <S.PointCurrentArticle>
        💰 현재 보유 포인트 : <span>{userInfo?.userPoint.amount}</span>원{" "}
      </S.PointCurrentArticle>
      <S.TableHeaderRow>
        <S.TableHeaderNumber>번호</S.TableHeaderNumber>
        <S.TableHeaderDate>날짜</S.TableHeaderDate>
        <S.TableHeaderStatus>유형</S.TableHeaderStatus>
        <S.TableHeaderAmount>금액</S.TableHeaderAmount>
      </S.TableHeaderRow>
      {data?.fetchPointTransactions.length ? (
        <S.PointListArticle>
          {data?.fetchPointTransactions.map((el, index) => (
            <S.Row key={el._id}>
              <S.ColumnNumber>{10 - index}</S.ColumnNumber>
              <S.ColumnDate>{getDate(el.createdAt)}</S.ColumnDate>
              <S.ColumnStatus>{el.status}</S.ColumnStatus>
              <S.ColumnAmount>{el.amount}원</S.ColumnAmount>
            </S.Row>
          ))}
        </S.PointListArticle>
      ) : (
        <S.PointListArticleNone>
          포인트 이용내역이 없습니다🙄
        </S.PointListArticleNone>
      )}
    </S.PointSection>
  );
}
