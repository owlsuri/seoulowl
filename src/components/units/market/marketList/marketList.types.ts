import { MouseEvent } from "react";

export interface IMarketListProps {
  data: any;
  onLoadMore: () => void;
  onClickToDetail: (event: MouseEvent<HTMLDivElement>) => void;
}
