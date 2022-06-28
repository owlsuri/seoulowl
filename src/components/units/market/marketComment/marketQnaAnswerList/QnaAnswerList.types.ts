import { MouseEvent } from "react";

export interface IMarketQnaAnswerListProps {
  qadata: any;
  data: any;
  loadMore: () => void;
  qael: any;
  onClickDelete: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
  userInfo?: any;
}
export interface IMarketQnaAnswerListItemProps {
  key: string;
  data?: any;
  qael: any;
  onClickDelete: (event: any) => void;
  userInfo?: any;
  el: any;
}
