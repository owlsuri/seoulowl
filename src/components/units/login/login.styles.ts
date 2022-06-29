import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";
import { ILoginStyleProps } from "./login.types";

export const LoginSection = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/backgroundImages/seoulnight.jpg");
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 500px 178px;
  @media ${breakPoints.tablet} {
    height: 100vh;
  }
`;
export const LoginArticle = styled.div`
  width: 800px;
  padding: 120px 0;
  background-color: #ffffff;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  @media ${breakPoints.mobile} {
    width: 340px;
    padding: 50px 15px;
  }
  @media ${breakPoints.tablet} {
    width: 750px;
    padding: 100px 50px;
  }
`;
export const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  padding-bottom: 20px;
`;

export const InputContainer = styled.div`
  padding-bottom: 30px;
  @media ${breakPoints.mobile} {
    padding-bottom: 10px;
  }
`;

export const Box = styled.div`
  padding-top: 30px;
`;
export const Error = styled.div`
  color: red;
  font-size: 11px;
  padding: 5px 0 0 5px;
`;
export const Label = styled.div`
  padding-bottom: 5px;
`;
export const Input = styled.input`
  width: 400px;
  height: 40px;
  border: none;
  border-bottom: 1px solid #e5e5e5;
  padding-left: 10px;
  @media ${breakPoints.mobile} {
    width: 300px;
  }
  @media ${breakPoints.tablet} {
    width: 350px;
  }
`;
export const LoginBtn = styled.button`
  width: 400px;
  height: 45px;
  border: none;
  background-color: ${(props: ILoginStyleProps) =>
    props.isActive ? "#213E6D" : "#E5E5E5"};
  color: #ffffff;
  letter-spacing: 1px;
  font-weight: 600;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    width: 300px;
  }
  @media ${breakPoints.tablet} {
    width: 350px;
  }
`;
export const ToSignup = styled.div`
  padding-top: 30px;
`;
export const Desc = styled.div`
  padding-bottom: 20px;
  color: gray;
  font-size: smaller;
`;

export const SignupBtn = styled.button`
  width: 400px;
  height: 45px;
  border: none;
  background-color: #e5e5e5;
  letter-spacing: 1px;
  font-weight: 600;
  cursor: pointer;

  :hover {
    background-color: #213e6d;
    color: #ffffff;
  }
  @media ${breakPoints.mobile} {
    width: 300px;
  }
  @media ${breakPoints.tablet} {
    width: 350px;
  }
`;
