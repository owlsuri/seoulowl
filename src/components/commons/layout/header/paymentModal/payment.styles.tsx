import styled from "@emotion/styled";

export const SelectTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  padding-bottom: 20px;
`;
export const Drop = styled.select`
  width: 460px;
  height: 55px;
  padding: 10px;
  border: none;
  border-bottom: 2px solid black;
`;
export const Option = styled.option`
  width: 460px;
  height: 55px;
  padding: 10px;
  font-size: 20px;
`;
export const ChargeBtn = styled.option`
  width: 460px;
  height: 51px;
  background: #bdbdbd;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 20px;
  color: white;
  cursor: pointer;
  :hover {
    background-color: #213e6d;
  }
`;
