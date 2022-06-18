import LoginUI from "./login.presenter";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form' 
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store";
import { useApolloClient, useMutation } from "@apollo/client";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "./login.queries";
import { IMutation, IMutationLoginUserArgs } from "../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { FormValues } from "./login.types";
import { useState } from "react";

const schema = yup.object({
    email : yup.string()
                .email("이메일 형식이 적합하지 않습니다.")
                .required("이메일은 필수 입력 사항입니다."),
    password : yup.string()
                .min(4, "비밀번호는 최소 4자리 이상 입력해주세요.")
                .max(15, "비밀번호는 최대 15자리 입니다.")
                .required("비밀번호는 필수 입력 사항 입니다.")
})

export default function Login(){

    const router = useRouter()
    const client = useApolloClient()

    const [ , setAccessToken ] = useRecoilState(accessTokenState);
    const [ userInfo, setUserInfo ] = useRecoilState(userInfoState)

    const [ loginUser ] = useMutation<Pick<IMutation,"loginUser">, IMutationLoginUserArgs>(LOGIN_USER)

    const { register, handleSubmit, formState } = useForm<FormValues>({
        resolver: yupResolver(schema),
        mode:"onChange"
    })

    const [alertModal, setAlertModal] = useState(false);
    const [modalContents, setModalContents] = useState("");
    const [errorAlertModal, setErrorAlertModal] = useState(false);

    // 이동모달
    const onClickRoutingModal = () => {
        
        setAlertModal(false);
    };

    // 에러모달
    const onClickErrorModal = () => {
        setErrorAlertModal(false);
    };

    const onClickLogin = async(data: IMutationLoginUserArgs) =>{
        try{
            const result = await loginUser({
                variables: {
                    ...data,
                }
            })
            const accessToken = result.data.loginUser.accessToken
            setAccessToken(accessToken)

            const resultUserInfo = await client.query({
                query : FETCH_USER_LOGGED_IN,
                context:{
                    headers:{
                        Authorization : `Bearer ${accessToken}`
                    },
                },
            })
        
            const userInfo = resultUserInfo.data.fetchUserLoggedIn

            setUserInfo(userInfo)

            localStorage.setItem("accessToken",accessToken)
            localStorage.setItem("userInfo", JSON.stringify(userInfo))
            setAlertModal(true)
            setModalContents(`${userInfo.name}님 환영합니다!`);

        } catch(error){
            setModalContents(error.message);
            setErrorAlertModal(true);
        }
    }

    return (
    <LoginUI 
        onClickLogin={onClickLogin}
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
        onClickRoutingModal={onClickRoutingModal}
        onClickErrorModal={onClickErrorModal}
        alertModal={alertModal}
        modalContents={modalContents}
        errorAlertModal={errorAlertModal}
        />)
}