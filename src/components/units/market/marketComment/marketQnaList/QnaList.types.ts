import { MouseEvent } from "react";

export interface IMarketQnaListProps {
  data?: any;
  userData?: any;
  onLoadMore: () => void;
  onClickDelete: (event: MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

export interface IMarketQnaListItemProps {
  key: string;
  el: any;
  data?: any;
  userData?: any;
  onClickDelete: (event: MouseEvent<SVGSVGElement, MouseEvent>) => void;
}
