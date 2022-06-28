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
import MarketListUI from "./marketList.presenter";
import { FETCH_USED_ITEMS } from "./marketList.queries";

export default function MarketList() {
  const router = useRouter();

  const [watchItems, setWatchItems] = useRecoilState(watchState);
  const [keyword, setKeyword] = useState<string>("");

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

  return (
    <MarketListUI
      data={data}
      onLoadMore={onLoadMore}
      onClickToDetail={onClickToDetail}
      refetch={refetch}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
    />
  );
}
