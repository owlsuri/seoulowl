import { MouseEvent } from "react";

export interface IMarketListProps {
  refetch: any;
  keyword: string;
  onChangeKeyword: (value: string) => any;
  data: any;
  onLoadMore: () => void;
  onClickToDetail: (event: any) => any;
}

export interface IMarketListStyleProps {
  isMatched: boolean;
}
