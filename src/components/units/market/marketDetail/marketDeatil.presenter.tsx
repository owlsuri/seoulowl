import UsedItemImages from "./imageSlick/imageSlick";
import * as S from "./marketDeatil.styles";
import Dompurify from "dompurify";
import KakaoMapPage from "../../../commons/kakaomap/kakaomap";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import BasicModal from "../../../commons/modal/basic/basicModal";
import ErrorModal from "../../../commons/modal/error/errorModal";
import { IMarketReadProps } from "./marketDeatil.types";
import MarketQnaWrite from "../marketComment/marketQnaWrite/QnaWrite.container";
import MarketQnAList from "../marketComment/marketQnaList/QnaList.container";
import { useState } from "react";
import MarketWrite from "../marketWrite/marketWrite.container";

export default function MarketDetailUI(props: IMarketReadProps) {
  const [isEdit, setIsEdit] = useState(false);

  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      {props.alertModal && (
        <BasicModal
          onClickExit={
            props.isRoute
              ? props.onClickRoutingModal
              : props.onClickConfirmModal
          }
          contents={props.modalContents}
        />
      )}

      {props.errorAlertModal && (
        <ErrorModal
          onClickExit={props.onClickErrorModal}
          contents={props.modalContents}
        />
      )}
      <S.MarketDetail>
        <S.MarketDetailSection>
          <S.MarketDetailSectionDiv>
            <S.MarketDetailImgArticle>
              <UsedItemImages data={props.data} />
            </S.MarketDetailImgArticle>
            <S.MarketDetailInfoArticle>
              <S.Remarks>{props.data?.fetchUseditem.remarks}</S.Remarks>
              <S.Name>{props.data?.fetchUseditem.name}</S.Name>
              <S.Seller>
                판매자 :
                <S.SellerName>
                  {props.data?.fetchUseditem.seller.name}
                </S.SellerName>
              </S.Seller>
              <S.Price>
                {props.data?.fetchUseditem.price.toLocaleString("ko-KR")}원
              </S.Price>
              <S.Tags>
                {props.data?.fetchUseditem.tags.map((el: any, i: number) => (
                  <S.Tag key={i}>{el}</S.Tag>
                ))}
              </S.Tags>
              <S.Contents>
                {typeof window !== "undefined" && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: Dompurify.sanitize(
                        props.data?.fetchUseditem.contents
                      ),
                    }}
                  />
                )}
              </S.Contents>
              <S.Buttons>
                <S.BuyBtn onClick={props.onClickPay}>BUY IT NOW</S.BuyBtn>
                <S.Btn onClick={props.onClickBasket(props.data?.fetchUseditem)}>
                  ADD TO CART
                </S.Btn>
                <S.Btn onClick={props.onClickPick}>
                  <S.HeartBox heart={props.heart}>
                    <S.Heart />
                    PICK
                  </S.HeartBox>
                </S.Btn>
              </S.Buttons>
            </S.MarketDetailInfoArticle>
          </S.MarketDetailSectionDiv>
          <S.MarketMoreDetailArticle>
            <S.Detail
              detailColor={props.detailColor}
              onClick={props.onClickShowDetail}
            >
              상품정보 자세히 보기
            </S.Detail>
            <S.Qna qnaColor={props.qnaColor} onClick={props.onClickQnA}>
              Q & A
            </S.Qna>

            {props.isShowQnA ? (
              <div>
                <MarketQnaWrite />
                <MarketQnAList />
              </div>
            ) : (
              <>
                <div>
                  {props.data?.fetchUseditem.images
                    ?.filter((el: string) => el)
                    .map((el: string) => (
                      <S.DetailImg
                        key={el}
                        src={`https://storage.googleapis.com/${el}`}
                      />
                    ))}
                </div>
                <S.Label>
                  <S.Pin src="/images/pin.png" />
                  상품상세내용
                </S.Label>
                <S.DetailContents>
                  {typeof window !== "undefined" && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: Dompurify.sanitize(
                          props.data?.fetchUseditem.contents
                        ),
                      }}
                    />
                  )}
                </S.DetailContents>
                <S.Label>
                  <S.Pin src="/images/pin.png" />
                  거래장소
                </S.Label>
                <KakaoMapPage data={props.data} />
              </>
            )}
          </S.MarketMoreDetailArticle>
          <S.MoveBtnArticle>
            <S.MoveBtn onClick={onClickMoveToPage("/market")}>
              목록으로
            </S.MoveBtn>
            {props.data?.fetchUseditem.seller.email ===
            props.userInfo?.fetchUserLoggedIn.email ? (
              <>
                <S.MoveBtn onClick={props.onClickMoveEdit}>수정하기</S.MoveBtn>
                <S.MoveBtn onClick={props.onClickDelete}>삭제하기</S.MoveBtn>
              </>
            ) : (
              ""
            )}
          </S.MoveBtnArticle>
        </S.MarketDetailSection>
      </S.MarketDetail>
      {isEdit && <MarketWrite isEdit={true} setIsEdit={setIsEdit} />}
    </>
  );
}
