import styled from "@emotion/styled";

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;
  left: 50%;
  top: 50%;
  padding: 45px 96px;
  background: white;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.2);
  transform: translate(-50%, -50%);
`;

export const Logo = styled.div`
  padding-bottom: 15px;
  font-size: 24px;
  font-weight: 700;
  line-height: 35px;
  text-align: center;
`;

export const ModalText = styled.div`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  letter-spacing: -0.02em;
  padding-bottom: 30px;
`;

export const ConfirmBtn = styled.button`
  width: 288px;
  height: 44px;
  border: none;
  border-radius: 8px;
  background-color: #333333;
  color: white;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  letter-spacing: -0.02em;
  cursor: pointer;
`;
