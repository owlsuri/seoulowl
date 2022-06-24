import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  UseFormStateReturn,
} from "react-hook-form";
import {
  ICreateBoardInput,
  IUpdateBoardInput,
} from "../../../../commons/types/generated/types";

export interface FormValues {
  writer?: string;
  password?: string;
  title?: string;
  contents?: string;
  addressDetail?: string;
  youtubeUrl?: string;
}

export interface IBoardWriteProps {
  register: UseFormRegister<FormValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: UseFormStateReturn<FieldValues>;
  getValues: any;
  reset: UseFormReset<FormValues>;
  onClickSubmit: (data: ICreateBoardInput) => void;
  onChangeContents: (value: any) => void;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  fileUrls: string[];
  showModal: () => void;
  handleOk: () => void;
  handleCancel: () => void;
  handleComplete: (data: any) => void;
  isOpen: boolean;
  zipcode?: any;
  address?: any;
  onClickRoutingModal: () => void;
  onClickErrorModal: () => void;
  alertModal: boolean;
  modalContents: string;
  errorAlertModal: boolean;
  isEdit: boolean;
  onClickEdit: (data: IUpdateBoardInput) => void;
  data?: any;
}
export interface IBoardWriteStyleProps {
  isActive: boolean;
}
