import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import {
  ICreateBoardCommentInput,
  IUpdateBoardCommentInput,
} from "../../../../../commons/types/generated/types";

export interface FormValues {
  writer?: string;
  password?: string;
  contents?: string;
}

export interface IBoardCommentWriteProps {
  onChangeRating?: (value: number) => void;
  rating?: number;
  register: UseFormRegister<FormValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  watch: UseFormWatch<FormValues>;
  el?: any;
  isCommentEdit?: boolean;
  onClickComment?: (data: ICreateBoardCommentInput) => void;
  onClickCommentEdit?: (data: any) => void;
  onClickRoutingModal?: () => void;
  onClickErrorModal?: () => void;
  alertModal?: boolean;
  modalContents?: string;
  errorAlertModal?: boolean;
}
