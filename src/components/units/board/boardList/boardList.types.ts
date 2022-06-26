import { MouseEvent } from "react";

export interface IBoardListUIProps {
  data: any;
  refetch: any;
  keyword: string;
  lastPage: number;
  onChangeKeyword: (value: string) => void;
  refetchBoardsCount: any;
  dataBoardsCount: any;
  onClickDetail: (event: MouseEvent<HTMLDivElement>) => void;
}

export interface IBoardListStylePorps {
  isMatched: boolean;
}
