import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../../commons/types/generated/types";

import BestBoardUI from "./bestBoard.presenter";

export const FETCH_BOARDS_BEST = gql`
  query fetchBoardsOfTheBest {
    fetchBoardsOfTheBest {
      _id
      writer
      title
      contents
      createdAt
      likeCount
      images
    }
  }
`;

export default function BestBoard() {
  const router = useRouter();
  const { data: dataBoardBest } = useQuery<
    Pick<IQuery, "fetchBoardsOfTheBest">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS_BEST);

  const onClickDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element)
      router.push(`/board/${event.currentTarget.id}`);
  };

  return (
    <BestBoardUI dataBoardBest={dataBoardBest} onClickDetail={onClickDetail} />
  );
}
