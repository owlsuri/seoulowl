import { MouseEvent } from "react";

export interface IMarketListProps {
  refetch: any;
  keyword: string;
  onChangeKeyword: (value: string) => void;
  data: any;
  onLoadMore: () => void;
  onClickToDetail: (event: MouseEvent<HTMLDivElement>) => void;
}

export interface IMarketListStyleProps {
  isMatched: boolean;
}
