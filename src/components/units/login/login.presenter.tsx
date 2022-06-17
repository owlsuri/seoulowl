import BasicModal from '../../commons/modal/basic/basicModal'
import ErrorModal from '../../commons/modal/error/errorModal'
import * as S from './login.styles'

export default function LoginUI(props){

    return(
        <>
        {props.alertModal && (
            <BasicModal 
                onClickExit={props.onClickRoutingModal} 
                contents={props.modalContents} />
        )}

        {props.errorAlertModal && (
            <ErrorModal
                onClickExit={props.onClickErrorModal}
                contents={props.modalContents}
            />
        )}

        <S.LoginSection>
            <S.LoginArticle>
                <form onSubmit={props.handleSubmit(props.onClickLogin)}>
                <S.Title>MEMBER LOGIN</S.Title>
                <S.InputContainer>
                    <S.Box>
                        <S.Label>ID</S.Label>
                        <S.Input type="text" 
                                 placeholder='이메일을 입력해주세요.'
                                 {...props.register('email')}/>
                    </S.Box>
                    <S.Error>{props.formState.errors.email?.message}</S.Error>
                    <S.Box>
                        <S.Label>PASSWORD</S.Label>
                        <S.Input type="password" 
                                 placeholder='비밀번호를 입력해주세요.'
                                 {...props.register('password')}/>
                    </S.Box>
                    <S.Error>{props.formState.errors.password?.message}</S.Error>
                </S.InputContainer>
                <S.LoginBtn isActive={props.formState.isValid}>LOGIN</S.LoginBtn>
                <S.ToSignup>
                    <S.Desc>아직 멤버가 아니신가요?</S.Desc>
                    <S.SignupBtn type='button' onClick={props.onClickToSignup}>SIGN UP</S.SignupBtn>
                </S.ToSignup>
                </form>
            </S.LoginArticle>      
        </S.LoginSection>
        </>
    )
}