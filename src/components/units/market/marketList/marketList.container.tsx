import { useQuery } from "@apollo/client";
import _ from "lodash";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { watchState } from "../../../../commons/store";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USER_LOGGED_IN } from "../../login/login.queries";
import MarketListUI from "./marketList.presenter";
import { FETCH_USED_ITEMS } from "./marketList.queries";

export default function MarketList() {
  const router = useRouter();

  const [, setWatchItems] = useRecoilState(watchState);
  const [keyword, setKeyword] = useState<string>("");

  const { data: userInfo } = useQuery(FETCH_USER_LOGGED_IN);

  const { data, fetchMore, refetch } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const onClickToDetail = (el: any) => (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/market/${event.currentTarget.id}`);

    const watch = JSON.parse(localStorage.getItem("watch") || "[]");

    const { __typename, ...newEl } = el;
    watch.unshift(newEl);

    localStorage.setItem("watch", JSON.stringify(watch));

    const ddd = _.uniqBy(watch, "_id");
    const ccc = ddd.slice(0, 3);

    setWatchItems(ccc);
  };

  const onClickToLogin = () => {
    alert("로그인 후 이용해주세요.");
    router.push("/login");
  };

  return (
    <MarketListUI
      data={data}
      userInfo={userInfo}
      onLoadMore={onLoadMore}
      onClickToDetail={onClickToDetail}
      refetch={refetch}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
      onClickToLogin={onClickToLogin}
    />
  );
}
