import styled from "@emotion/styled";

export const LoginSection = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("/backgroundImages/seoulnight.jpg");
    background-size : cover;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 178px;
` 
export const LoginArticle = styled.div`
    width: 800px;
    padding: 120px 0;
    background-color: #FFFFFF;
    border-radius: 30px;

    display: flex;
    align-items: center;
    justify-content: center;
` 
export const Title = styled.div`
    font-size: 25px;
    font-weight: 600;
    text-align: center;
    padding-bottom: 20px;
` 

export const InputContainer = styled.div`
    padding-bottom: 30px;
`

export const Box = styled.div`
    padding-top: 30px;
`
export const Error = styled.div`
    color: red;
    font-size: 11px;
    padding: 5px 0 0 5px;
`
export const Label = styled.div`
    padding-bottom: 5px;
`
export const Input = styled.input`
    width: 400px;
    height: 40px;
    border: none;
    border-bottom: 1px solid #E5E5E5;
    padding-left: 10px;
`
export const LoginBtn = styled.button`
    width: 400px;
    height: 45px;
    border: none;
    background-color: ${(props) => (props.isActive ? "#213E6D" : "#E5E5E5")};
    color: #FFFFFF;
    cursor: pointer;
`
export const ToSignup = styled.div`
    padding-top: 30px;
`
export const Desc = styled.div`
    padding-bottom: 20px;
    color: gray;
    font-size: smaller;
`

export const SignupBtn = styled.button`
    width: 400px;
    height: 45px;
    border: none;
    background-color: #E5E5E5;
    cursor: pointer;

    :hover{
        background-color: #213E6D;
        color: #FFFFFF;
    }
`