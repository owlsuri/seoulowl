import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import BasicModal from "../../commons/modal/basic/basicModal";
import ErrorModal from "../../commons/modal/error/errorModal";
import * as S from "./signup.styles";
import { ISignupUIProps } from "./signup.types";
import Head from "next/head";

export default function SignupUI(props: ISignupUIProps) {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      <Head>
        <title>🦉회원가입 </title>
      </Head>

      {props.alertModal && (
        <BasicModal
          onClickExit={props.onClickRoutingModal}
          contents={props.modalContents}
        />
      )}

      {props.errorAlertModal && (
        <ErrorModal
          onClickExit={props.onClickErrorModal}
          contents={props.modalContents}
        />
      )}

      <S.SignupSection>
        <S.SignupArticle>
          <form onSubmit={props.handleSubmit(props.onClickSignup)}>
            <S.Title>MEMBER SIGNUP</S.Title>
            <S.InputContainer>
              <S.Box>
                <S.Label>NAME</S.Label>
                <S.Input
                  type="text"
                  placeholder="이름을 입력해주세요."
                  {...props.register("name")}
                />
              </S.Box>
              <S.Error>{props.formState.errors.name?.message}</S.Error>
              <S.Box>
                <S.Label>E-MAIL</S.Label>
                <S.Input
                  type="text"
                  placeholder="이메일을 입력해주세요."
                  {...props.register("email")}
                />
              </S.Box>
              <S.Error>{props.formState.errors.email?.message}</S.Error>
              <S.Box>
                <S.Label>PASSWORD</S.Label>
                <S.Input
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                  {...props.register("password")}
                />
              </S.Box>
              <S.Error>{props.formState.errors.password?.message}</S.Error>
              <S.Box>
                <S.Label>PASSWORD AGAIN</S.Label>
                <S.Input
                  type="password"
                  placeholder="비밀번호를 다시 입력해주세요."
                  {...props.register("password")}
                />
              </S.Box>
              <S.Error>
                {props.formState.errors.confirmPassword?.message}
              </S.Error>
            </S.InputContainer>
            <S.SignupBtn isActive={props.formState.isValid}>SIGNUP</S.SignupBtn>
            <S.ToSignup>
              <S.Desc>이미 멤버이신가요?</S.Desc>
              <S.LoginBtn type="button" onClick={onClickMoveToPage("/login")}>
                LOGIN
              </S.LoginBtn>
            </S.ToSignup>
          </form>
        </S.SignupArticle>
      </S.SignupSection>
    </>
  );
}
