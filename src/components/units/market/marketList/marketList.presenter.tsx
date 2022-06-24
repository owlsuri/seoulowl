import MarketBest from "./marketBest/marketBest.container";
import * as S from "./marketList.styles";
import InfiniteScroll from "react-infinite-scroller";
import { BackTop } from "antd";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { IMarketListProps } from "./marketList.types";

export default function MarketListUI(props: IMarketListProps) {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.MarketList>
      <S.MarketListSubtitleSection>🛒👖👜👟⚽🥊🥕</S.MarketListSubtitleSection>
      <S.MarketListTitleSection>중고마켓</S.MarketListTitleSection>
      <S.MarketNew onClick={onClickMoveToPage("/market/new")}>📝</S.MarketNew>
      <S.MarketListSection>
        <S.MarketListBestArticle>
          <MarketBest />
        </S.MarketListBestArticle>
        <S.MarketListArticle>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
          >
            <S.ListWrapper>
              {props.data?.fetchUseditems.map((el: any) => (
                <S.MarketLists
                  key={el?._id}
                  id={el._id}
                  onClick={props.onClickToDetail}
                >
                  <S.ImageArticle>
                    <S.ItemImg
                      id={el._id}
                      src={
                        el.images[0]
                          ? `https://storage.googleapis.com/${el.images?.[0]}`
                          : "/images/noimage.jpg"
                      }
                    />
                    <S.HeartBox>
                      <S.Heart id={el?._id} />
                    </S.HeartBox>
                    <S.PickedCount>{el.pickedCount}</S.PickedCount>
                  </S.ImageArticle>
                  <S.TitleArticle>
                    <S.Title>{el.name}</S.Title>
                  </S.TitleArticle>
                  <S.RemarkArticle>
                    {el.remarks.length ? el.remarks : "좋은 상품이에요!"}
                  </S.RemarkArticle>
                  <S.PriceArticle>{el.price}원</S.PriceArticle>
                </S.MarketLists>
              ))}
            </S.ListWrapper>
          </InfiniteScroll>
        </S.MarketListArticle>
      </S.MarketListSection>
      <S.BackTop>
        <BackTop />
        <strong className="site-back-top-basic"></strong>
      </S.BackTop>
    </S.MarketList>
  );
}
