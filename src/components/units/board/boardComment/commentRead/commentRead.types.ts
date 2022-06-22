import { ChangeEvent, MouseEvent } from "react";

export interface IBoardCommentReadProps {
  onLoadMore: () => void;
  data: any;
  isOpenModal: Boolean;
  onClickOpenModal: (event: MouseEvent<HTMLOrSVGElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  handleCancel: () => void;
  onClickDelete: () => void;
}
