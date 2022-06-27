import {
  ICreateUseditemInput,
  IUpdateUseditemInput,
} from "./../../../../commons/types/generated/types";
import { MouseEvent } from "react";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  UseFormStateReturn,
} from "react-hook-form";

export interface FormValues {
  name?: string;
  remarks?: string;
  contents?: string;
  price?: string;
  tags?: [string];
  addressDetail?: string;
}

export interface IMarketWriteProps {
  register: UseFormRegister<FormValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: UseFormStateReturn<FieldValues>;
  getValues: any;
  reset: UseFormReset<FormValues>;
  onChangeContents: (value: any) => void;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  onClickImageDelete: (index: number) => () => void;
  fileUrls: string[];
  hashArr: string[];
  onKeyUpHash: (event) => void;
  onClickDeleteHash: (
    event: MouseEvent<SVGAElement, MouseEvent<Element, MouseEvent>>
  ) => void;
  showModal: () => void;
  handleOk: () => void;
  handleCancel: () => void;
  handleComplete: (data: any) => void;
  isOpen: boolean;
  zipcode?: any;
  address?: any;
  onClickRoutingModal: () => void;
  onClickUpdatedModal: () => void;
  onClickErrorModal: () => void;
  alertModal: boolean;
  modalContents: string;
  errorAlertModal: boolean;
  onClickSubmit: (data: ICreateUseditemInput) => void;
  onClickEdit: (data: IUpdateUseditemInput) => void;
  isEdit: boolean;
  data: any;
}
export interface IMarketWriteStyleProps {
  isActive: boolean;
}
