import { IMutationLoginUserArgs } from './../../../commons/types/generated/types';
import { FieldValues, UseFormHandleSubmit, UseFormRegister, UseFormStateReturn } from "react-hook-form";

export interface FormValues {
    email?: string;
    password?: string;
}

export interface ILoginUIProps {
    onClickLogin: (data: IMutationLoginUserArgs) => Promise<void>;
    onClickToSignup: () => void;
    register: UseFormRegister<FormValues>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    formState: UseFormStateReturn<FieldValues>;
}