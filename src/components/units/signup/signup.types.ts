import {
  UseFormStateReturn,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { IMutationCreateUserArgs } from "../../../commons/types/generated/types";

export interface FormValues {
  name?: string;
  email?: string;
  password?: string;
}

export interface ISignupUIProps {
  onClickSignup: (data: IMutationCreateUserArgs) => Promise<void>;
  register: UseFormRegister<FormValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: UseFormStateReturn<FieldValues>;
  onClickRoutingModal: () => void;
  onClickErrorModal: () => void;
  alertModal: boolean;
  modalContents: string;
  errorAlertModal: boolean;
}

export interface ISignupStyleProps {
  isActive: boolean;
}
