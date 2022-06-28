import { useQuery } from "@apollo/client";
import _ from "lodash";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { useRecoilState } from "recoil";
import { watchState } from "../../../../../commons/store";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../../commons/types/generated/types";
import MarketBestUI from "./marketBest.presenter";
import { FETCH_USED_ITEMS_BEST } from "./marketBest.queries";

export default function MarketBest() {
  const router = useRouter();

  const [watchItems, setWatchItems] = useRecoilState(watchState);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemsOfTheBest">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS_BEST);

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

  return <MarketBestUI data={data} onClickToDetail={onClickToDetail} />;
}
