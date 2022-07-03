import { IMarketBestProps } from "../marketList.types";
import * as S from "./marketBest.styles";

export default function MarketBestUI(props: IMarketBestProps) {
  return (
    <S.MarketBest>
      {props.data?.fetchUseditemsOfTheBest.map((el: any) => (
        <S.MarketBestSection
          key={el?._id}
          id={el._id}
          onClick={
            props.userInfo ? props.onClickToDetail(el) : props.onClickToLogin
          }
        >
          <S.ImageArticle>
            <S.ImgBox>
              <S.BestItemImg
                id={el._id}
                src={
                  el.images[0]
                    ? `https://storage.googleapis.com/${el.images?.[0]}`
                    : "/images/noimages.jpg"
                }
              />
            </S.ImgBox>
            <S.HeartBox>
              <S.Heart id={el?._id} />
              <S.PickedCount>{el.pickedCount}</S.PickedCount>
            </S.HeartBox>
          </S.ImageArticle>
          <S.TitleArticle>
            <S.BestMark>BEST</S.BestMark>
            <S.Title>{el.name}</S.Title>
          </S.TitleArticle>
          <S.RemarkArticle>
            {el.remarks.length ? el.remarks : "좋은 상품이에요!"}
          </S.RemarkArticle>
          <S.PriceArticle>{el.price.toLocaleString("ko-KR")}원</S.PriceArticle>
        </S.MarketBestSection>
      ))}
    </S.MarketBest>
  );
}
