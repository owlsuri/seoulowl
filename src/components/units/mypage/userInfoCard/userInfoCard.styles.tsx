import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import { IUserInfoCardStyleProps } from "../mypage.types";

export const UserInfoCardSection = styled.div`
  width: 1000px;
  background-color: #fff;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${breakPoints.mobile} {
    width: 360px;
    padding: 5px;
  }
  @media ${breakPoints.tablet} {
    width: 760px;
  }
`;
export const UserInfoArticle = styled.div`
  font-size: 22px;
  padding: 15px;
  span {
    font-weight: 600;
    font-size: 24px;
    color: #213e6d;
    padding-left: 7px;
    @media ${breakPoints.mobile} {
      padding: 5px;
      font-size: 14px;
    }
  }
  border-bottom: 2px solid #a6a6a6;
  @media ${breakPoints.mobile} {
    padding: 5px;
    font-size: 12px;
  }
`;
export const Owl = styled.img`
  width: 35px;
  @media ${breakPoints.mobile} {
    width: 18px;
  }
`;
export const UserDataArticle = styled.div`
  display: flex;
  padding: 20px;
  font-size: 16px;
  font-weight: 600;
  @media ${breakPoints.mobile} {
    padding: 5px;
    font-size: 10px;
  }
`;
export const Element = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${breakPoints.mobile} {
    padding: 0 10px;
  }
`;
export const Name = styled.div`
  font-size: 17px;
  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;
export const Amount = styled.div`
  color: #213e6d;
  font-size: 18px;
  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
`;
export const TapSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px 80px 0 80px;
  @media ${breakPoints.mobile} {
    padding: 50px 20px 0 20px;
  }
  @media ${breakPoints.tablet} {
    padding: 50px 20px 0 20px;
  }
`;
export const TapArticle = styled.div`
  width: 140px;
  height: 50px;
  background-color: ${(props: IUserInfoCardStyleProps) =>
    props.isSelected === props.id ? "#fff" : "#213e6d"};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${breakPoints.mobile} {
    width: 60px;
  }
  @media ${breakPoints.tablet} {
    width: 120px;
  }
`;
export const TapName = styled.div`
  font-weight: 600;
  font-size: 19px;
  color: ${(props: IUserInfoCardStyleProps) =>
    props.isSelected === props.id ? "#213e6d" : "#fff"};
  cursor: pointer;
  @media ${breakPoints.mobile} {
    font-size: 11px;
  }
  @media ${breakPoints.tablet} {
    font-size: 16px;
  }
`;
