import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media ${breakPoints.mobile} {
    width: 330px;
  }
`;
export const Pre = styled.span`
  text-align: center;
  cursor: pointer;
`;

export const Next = styled.span`
  text-align: center;
  cursor: pointer;
`;
export const PageNum = styled.div`
  font-size: 15px;
  cursor: pointer;
`;
