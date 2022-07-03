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
import { FETCH_USER_LOGGED_IN } from "../../../login/login.queries";
import MarketBestUI from "./marketBest.presenter";
import { FETCH_USED_ITEMS_BEST } from "./marketBest.queries";

export default function MarketBest() {
  const router = useRouter();

  const [, setWatchItems] = useRecoilState(watchState);

  const { data: userInfo } = useQuery(FETCH_USER_LOGGED_IN);

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

  const onClickToLogin = () => {
    alert("로그인 후 이용해주세요.");
    router.push("/login");
  };

  return (
    <MarketBestUI
      data={data}
      userInfo={userInfo}
      onClickToDetail={onClickToDetail}
      onClickToLogin={onClickToLogin}
    />
  );
}
