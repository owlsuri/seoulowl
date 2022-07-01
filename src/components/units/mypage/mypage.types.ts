export interface IMyPageProps {
  isSelected?: string;
  setIsSelected?: any;
  buyingCount?: any;
  basketItems?: any;
  pickedCount?: any;
  sellingCount?: any;
}

export interface IUserInfoCardProps {
  onClickSelectMenu: (event: any) => void;
  userInfo?: any;
  isSelected?: string;
  buyingCount?: any;
  basketItems?: any;
  pickedCount?: any;
  sellingCount?: any;
}

export interface IUserInfoCardStyleProps {
  isSelected?: string;
  id?: string;
}
