import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../../commons/types/generated/types";
import MarketBestUI from "./marketBest.presenter";
import { FETCH_USED_ITEMS_BEST } from "./marketBestqueries";

export default function MarketBest() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemsOfTheBest">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS_BEST);

  const onClickHeart = () => {
    setChecked(!checked);
  };

  const onClickToDetail = (event) => {
    console.log("sdsdsd");
    router.push(`/market/${event.currentTarget.id}`);
  };

  return (
    <MarketBestUI
      data={data}
      onClickHeart={onClickHeart}
      checked={checked}
      onClickToDetail={onClickToDetail}
    />
  );
}
