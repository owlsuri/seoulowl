import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getDate } from "../../../../../commons/libraries/getDate";
import { basketItemState } from "../../../../../commons/store";
import * as S from "./cart.styles";

export default function Cart() {
  const router = useRouter();

  const [basketItems] = useRecoilState(basketItemState);

  const onClickDetail = (event: any) => {
    router.push(`/market/${event.target.id}`);
  };

  return (
    <S.CartSection>
      <S.CartTitleArticle>장바구니</S.CartTitleArticle>
      <S.CartCountArticle>
        🛒 장바구니 상품 : <span>{basketItems.length}</span>개
      </S.CartCountArticle>
      <S.CartList>
        <S.TableHeaderRow>
          <S.TableHeaderNumber>번호</S.TableHeaderNumber>
          <S.TableHeaderImage>대표 이미지</S.TableHeaderImage>
          <S.TableHeaderName>상품명</S.TableHeaderName>
          <S.TableHeaderAmount>가격</S.TableHeaderAmount>
          <S.ColumnCheck type="checkbox" />
        </S.TableHeaderRow>
        {basketItems.length === 0 ? (
          <S.CartListArticleNone>
            장바구니가 비어있습니다😥
          </S.CartListArticleNone>
        ) : (
          <S.CartListArticle>
            {basketItems
              .map((el, index) => (
                <S.Row key={el._id}>
                  <S.ColumnNumber>{index + 1}</S.ColumnNumber>
                  <S.ColumnImage>
                    <S.ItemImg
                      onClick={onClickDetail}
                      id={el._id}
                      src={
                        el.images[0]
                          ? `https://storage.googleapis.com/${el.images?.[0]}`
                          : "/images/noimages.jpg"
                      }
                    />
                  </S.ColumnImage>
                  <S.ColumnName>{el.name}</S.ColumnName>
                  <S.ColumnAmount>{el.price}원</S.ColumnAmount>
                  <S.ColumnCheck type="checkbox" id={el._id} />
                </S.Row>
              ))
              .reverse()}
          </S.CartListArticle>
        )}
      </S.CartList>
      <S.ButtonArticle>
        <S.PayBtn>선택한 상품 결제하기</S.PayBtn>
        <S.DeleteBtn>선택한 상품 삭제하기</S.DeleteBtn>
      </S.ButtonArticle>
    </S.CartSection>
  );
}
