import { ChangeEvent } from "react";

export interface IBoardCommentWriteProps {
  onChangeInputs?: (event: any) => void;
  onChangeRating?: (value: number) => void;
  rating?: number;
  inputs?: {
    writer?: string;
    password?: string;
    contents?: string;
  };
  el?: any;
  isCommentEdit?: boolean;
  onClickComment?: () => void;
  onClickCommentEdit?: () => void;
  onClickRoutingModal?: () => void;
  onClickErrorModal?: () => void;
  alertModal?: boolean;
  modalContents?: string;
  errorAlertModal?: boolean;
}
