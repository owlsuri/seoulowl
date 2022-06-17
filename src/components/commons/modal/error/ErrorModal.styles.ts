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

export const Logo = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 40px;
`;

export const ModalText = styled.div`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  letter-spacing: -0.02em;
`;

export const ConfirmBtn = styled.button`
  width: 288px;
  height: 44px;
  margin-top: 50px;
  border: none;
  border-radius: 8px;
  background-color: #333333;
  color: white;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
`;
