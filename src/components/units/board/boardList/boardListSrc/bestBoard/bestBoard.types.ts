import { MouseEvent } from "react";

export interface IBoardBestProps {
  onClickDetail: (event: MouseEvent<HTMLDivElement>) => void;
  dataBoardBest: any;
}
