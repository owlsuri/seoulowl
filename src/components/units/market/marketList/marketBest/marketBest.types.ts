import { MouseEvent } from "react";

export interface IMarketBestProps {
  data: any;
  onClickToDetail: (event: MouseEvent<HTMLDivElement>) => void;
}
