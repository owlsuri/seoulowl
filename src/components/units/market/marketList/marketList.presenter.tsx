import MarketBest from "./marketBest/marketBest.container";
import * as S from "./marketList.styles";
import InfiniteScroll from "react-infinite-scroller";
import { BackTop } from "antd";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { IMarketListProps } from "./marketList.types";
import SearchBars02 from "../../../commons/searchBars/02/searchBars02.container";
import { v4 as uuidv4 } from "uuid";
import Head from "next/head";

export default function MarketListUI(props: IMarketListProps) {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <>
      <Head>
        <title>πμ€κ³ λ§μΌ</title>
      </Head>

      <S.MarketList>
        <S.MarketListSubtitleSection>πππππ₯π₯</S.MarketListSubtitleSection>
        <S.MarketListTitleSection>μ€κ³ λ§μΌ</S.MarketListTitleSection>
        <S.MarketNew
          onClick={
            props.userInfo
              ? onClickMoveToPage("/market/new")
              : props.onClickToLogin
          }
        >
          π
        </S.MarketNew>
        <S.MarketListSection>
          <S.MarketListBestArticle>
            <MarketBest />
          </S.MarketListBestArticle>
          <S.MarketListSearch>
            <SearchBars02
              refetch={props.refetch}
              onChangeKeyword={props.onChangeKeyword}
            />
          </S.MarketListSearch>
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
                    onClick={
                      props.userInfo
                        ? props.onClickToDetail(el)
                        : props.onClickToLogin
                    }
                  >
                    <S.ImageArticle>
                      <S.ImgBox>
                        <S.ItemImg
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
                      <S.Title>
                        {el.name
                          .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                          .split("#$%")
                          .map((el: any) => (
                            <S.Word
                              key={uuidv4()}
                              isMatched={props.keyword === el}
                            >
                              {el}
                            </S.Word>
                          ))}
                      </S.Title>
                    </S.TitleArticle>
                    <S.RemarkArticle>
                      {el.remarks.length ? el.remarks : "μ’μ μνμ΄μμ!"}
                    </S.RemarkArticle>
                    <S.PriceArticle>
                      {el.price.toLocaleString("ko-KR")}μ
                    </S.PriceArticle>
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
    </>
  );
}
