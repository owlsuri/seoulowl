export interface IMarketListProps {
  refetch: any;
  keyword: string;
  onChangeKeyword: (value: string) => any;
  data: any;
  onLoadMore: () => void;
  onClickToDetail: (event: any) => any;
  userInfo: any;
  onClickToLogin: () => void;
}

export interface IMarketListStyleProps {
  isMatched: boolean;
}

export interface IMarketBestProps {
  data: any;
  userInfo: any;
  onClickToDetail: (event: any) => any;
  onClickToLogin: () => void;
}
