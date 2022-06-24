import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import {
  ICreateUseditemQuestionInput,
  IUpdateUseditemQuestionInput,
} from "../../../../../commons/types/generated/types";

export interface FormValues {
  contents?: string;
}

export interface IMarketQnaWriteProps {
  register: UseFormRegister<FormValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  watch: UseFormWatch<FormValues>;
  onClickAsk: (data: ICreateUseditemQuestionInput) => void;
  onClickUpdateQna: (data: IUpdateUseditemQuestionInput) => void;
  data: any;
  isEdit: boolean;
  el: any;
}
