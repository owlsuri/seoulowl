import { useRouter } from "next/router";
import * as S from "./cart.styles";

export default function Cart(props) {
  const router = useRouter();

  const onClickDetail = (event: any) => {
    router.push(`/market/${event.target.id}`);
  };

  const total = props.basketItems.reduce((acc, cur) => {
    acc += cur.price;
    return acc;
  }, 0);

  return (
    <S.CartSection>
      <S.CartTitleArticle>μ₯λ°κ΅¬λ</S.CartTitleArticle>
      <S.CartCountArticle>
        π μ₯λ°κ΅¬λ μνμ μ΄ <span>{props.basketItems.length}</span>κ°μ΄κ³ ,{" "}
        <div>
          μ΄ κΈμ‘μ <span>{total.toLocaleString("ko-KR")}</span>μ μλλ€.
        </div>
      </S.CartCountArticle>
      <S.CartList>
        <S.TableHeaderRow>
          <S.TableHeaderNumber>λ²νΈ</S.TableHeaderNumber>
          <S.TableHeaderImage>λνμ¬μ§</S.TableHeaderImage>
          <S.TableHeaderName>μνλͺ</S.TableHeaderName>
          <S.TableHeaderAmount>κ°κ²©</S.TableHeaderAmount>
          {/* <S.ColumnCheck type="checkbox" /> */}
        </S.TableHeaderRow>
        {props.basketItems.length === 0 ? (
          <S.CartListArticleNone>
            μ₯λ°κ΅¬λκ° λΉμ΄μμ΅λλ€π₯
          </S.CartListArticleNone>
        ) : (
          <S.CartListArticle>
            {props.basketItems
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
                  <S.ColumnAmount>
                    {el.price.toLocaleString("ko-KR")}μ
                  </S.ColumnAmount>
                  {/* <S.ColumnCheck type="checkbox" id={el._id} /> */}
                </S.Row>
              ))
              .reverse()}
          </S.CartListArticle>
        )}
      </S.CartList>
      <S.ButtonArticle>
        {/* <S.PayBtn>μ νν μν κ²°μ νκΈ°</S.PayBtn>
        <S.DeleteBtn>μ νν μν μ­μ νκΈ°</S.DeleteBtn> */}
      </S.ButtonArticle>
    </S.CartSection>
  );
}
