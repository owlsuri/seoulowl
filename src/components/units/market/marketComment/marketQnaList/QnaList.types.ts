import { MouseEvent } from "react";

export interface IMarketQnaListProps {
  data?: any;
  userInfo?: any;
  onLoadMore: () => void;
  onClickDelete: (event: MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

export interface IMarketQnaListItemProps {
  key: string;
  el: any;
  data?: any;
  userInfo?: any;
  onClickDelete: (event: any) => void;
}
