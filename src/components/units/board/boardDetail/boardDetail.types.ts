export interface IBoardDetailProps {
  data: any;
  onClickLike: () => void;
  onClickDisLike: () => void;
  onClickToEdit: () => void;
  onClickDelete: () => void;
  onClickRoutingModal: () => void;
  onClickErrorModal: () => void;
  alertModal: boolean;
  modalContents: string;
  errorAlertModal: boolean;
}
