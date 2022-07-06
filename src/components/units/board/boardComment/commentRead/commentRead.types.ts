import { ChangeEvent } from "react";

export interface IBoardCommentReadProps {
  onLoadMore?: () => void;
  data?: any;
  isOpenModal?: Boolean;
  onClickOpenModal?: (event: any) => void;
  onChangePassword?: (event: ChangeEvent<HTMLInputElement>) => void;
  handleCancel?: () => void;
  onClickDelete?: () => void;
  el?: any;
}
