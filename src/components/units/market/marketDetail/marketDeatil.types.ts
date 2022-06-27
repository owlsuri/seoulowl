export interface IMarketReadProps {
  data: any;
  userInfo: any;
  isShowQnA: boolean;
  detailColor: boolean;
  qnaColor: boolean;
  heart: boolean;
  onClickPay: () => void;
  onClickPick: () => void;
  onClickBasket: (el: any) => () => void;
  onClickShowDetail: () => void;
  onClickQnA: () => void;
  onClickMoveEdit: () => void;
  onClickDelete: () => void;
  onClickRoutingModal: () => void;
  onClickErrorModal: () => void;
  onClickConfirmModal: () => void;
  alertModal: boolean;
  modalContents: string;
  errorAlertModal: boolean;
  isRoute: boolean;
}

export interface IMarketReadStyleProps {
  heart: boolean;
  detailColor: boolean;
  qnaColor: boolean;
}
