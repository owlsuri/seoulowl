import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_USED_ITEMS_I_PICKED } from "../../mypage.queries";
import InfiniteScroll from "react-infinite-scroller";

import * as S from "./pick.styles";
import { useRouter } from "next/router";
import ErrorModal from "../../../../commons/modal/error/errorModal";
import { useState } from "react";

export default function Pick(props: any) {
  const router = useRouter();

  const [modalContents, setModalContents] = useState("");
  const [errorAlertModal, setErrorAlertModal] = useState(false);

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USED_ITEMS_I_PICKED, {
    variables: { search: "" },
  });

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemsIPicked.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemsIPicked)
          return { fetchUseditemsIPicked: [...prev.fetchUseditemsIPicked] };
        return {
          fetchUseditemsIPicked: [
            ...prev.fetchUseditemsIPicked,
            ...fetchMoreResult.fetchUseditemsIPicked,
          ],
        };
      },
    });
  };

  const onClickDetail = (event: any) => {
    router.push(`/market/${event.target.id}`);
  };

  const onClickErrorModal = () => {
    setErrorAlertModal(false);
  };

  const onClickAlert = () => {
    setModalContents("이미 판매된 상품 입니다.");
    setErrorAlertModal(true);
  };

  return (
    <>
      {errorAlertModal && (
        <ErrorModal onClickExit={onClickErrorModal} contents={modalContents} />
      )}
      <S.PickSection>
        <S.PickTitleArticle>Pick한 상품</S.PickTitleArticle>
        <S.PickCountArticle>
          Pick한 상품은 총{" "}
          <span>{props.pickedCount?.fetchUseditemsCountIPicked}</span>개 입니다
        </S.PickCountArticle>
        {data?.fetchUseditemsIPicked.length ? (
          <S.PickListArticle>
            <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
              <S.Sale>
                <S.Label>판매중인 상품</S.Label>
                <S.Items>
                  {data?.fetchUseditemsIPicked.map((el) => (
                    <div key={el._id}>
                      {el.soldAt === null && (
                        <S.Item onClick={onClickDetail}>
                          <S.Img
                            id={el._id}
                            src={
                              el.images[0]
                                ? `https://storage.googleapis.com/${el.images?.[0]}`
                                : "/images/noimages.jpg"
                            }
                          />
                          <S.Detail>
                            <div>
                              <S.Name>{el.name}</S.Name>
                              <S.Price>
                                {el.price.toLocaleString("ko-KR")}원
                              </S.Price>
                            </div>
                            <S.HeartBox>
                              <S.Heart />
                              <S.PickedCount>{el.pickedCount}</S.PickedCount>
                            </S.HeartBox>
                          </S.Detail>
                        </S.Item>
                      )}
                    </div>
                  ))}
                </S.Items>
              </S.Sale>
              <S.Sold>
                <S.Label>품절된 상품</S.Label>
                <S.Items>
                  {data?.fetchUseditemsIPicked.map((el) => (
                    <div key={el._id}>
                      {el.soldAt !== null && (
                        <S.Item onClick={onClickAlert}>
                          <S.Img
                            src={
                              el.images[0]
                                ? `https://storage.googleapis.com/${el.images?.[0]}`
                                : "/images/noimages.jpg"
                            }
                          />
                          <S.Detail>
                            <div>
                              <S.Name>{el.name}</S.Name>
                              <S.Price>
                                {el.price.toLocaleString("ko-KR")}원
                              </S.Price>
                            </div>
                            <S.SoldMark>판매완료</S.SoldMark>
                          </S.Detail>
                        </S.Item>
                      )}
                    </div>
                  ))}
                </S.Items>
              </S.Sold>
            </InfiniteScroll>
          </S.PickListArticle>
        ) : (
          <S.PickListArticleNone>
            아직 Pick한 상품이 없습니다😥
          </S.PickListArticleNone>
        )}
      </S.PickSection>
    </>
  );
}
