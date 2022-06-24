import { MouseEvent } from "react";

export interface IMarketQnaAnswerListProps {
  qadata: any;
  data: any;
  loadMore: () => void;
  qael: any;
  onClickDelete: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
  userData: any;
}
export interface IMarketQnaAnswerListItemProps {
  key: string;
  data?: any;
  qael: any;
  onClickDelete: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
  userData?: any;
  el: any;
}
