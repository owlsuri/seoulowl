import SignupUI from "./signup.presenter";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form' 
import { useState } from "react";
import { FormValues } from "./signup.types";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./signup.queries";
import { IMutationCreateUserArgs } from "../../../commons/types/generated/types";
import { useRouter } from "next/router";

const schema = yup.object({
    name: yup.string()
            .min(2, "이름은 2자리 이상 입력해 주세요.")
            .max(10, "10자 이내로 입력해주세요.")
            .required("이름은 필수 입력 사항입니다."),
    email : yup.string()
            .email("이메일 형식이 적합하지 않습니다.")
            .required("이메일은 필수 입력 사항입니다."),
    password: yup.string()
            .matches(/^[A-Za-z0-9+]{8,16}$/, "영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요.")
            .required("비밀번호는 필수 입력 사항입니다."),
    confirmPassword: yup.string()
            .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
})

export default function Signup(){
    const router = useRouter()

    const [ createUser ] = useMutation(CREATE_USER)

    const [alertModal, setAlertModal] = useState(false);
    const [modalContents, setModalContents] = useState("");
    const [errorAlertModal, setErrorAlertModal] = useState(false);

    // 이동모달
    const onClickRoutingModal = () => {
        setAlertModal(false);
        router.push('/login')
    };

    // 에러모달
    const onClickErrorModal = () => {
        setErrorAlertModal(false);
    };

    const { register, handleSubmit, formState } = useForm<FormValues>({
        resolver: yupResolver(schema),
        mode:"onChange"
    })

    const onClickSignup = async(data: IMutationCreateUserArgs) => {
        try{
            const result = await createUser({
                variables: {
                    createUserInput:{
                        ...data
                    }
                }
            })
            setAlertModal(true)
            setModalContents("멤버가 되신 것을 환영합니다!");
        } catch(error){
            setModalContents(error.message);
            setErrorAlertModal(true);
        } 
    }

    return(
        <SignupUI
            register={register}
            handleSubmit={handleSubmit}
            formState={formState}
            onClickSignup={onClickSignup}
            onClickRoutingModal={onClickRoutingModal}
            onClickErrorModal={onClickErrorModal}
            alertModal={alertModal}
            modalContents={modalContents}
            errorAlertModal={errorAlertModal}
        />
    )
}