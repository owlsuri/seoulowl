import styled from "@emotion/styled";

export const Header = styled.div`
  width: 100%;
  background-color: #213e6d60;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
`;
export const HeaderWrapper = styled.div`
  width: 1200px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const HeaderLogoSection = styled.div``;
export const HeaderLogo = styled.img`
  cursor: pointer;
`;
export const HeaderUserSection = styled.div`
  color: #ffffff;
  padding: 10px 0;
  letter-spacing: 1px;
`;
export const HeaderMenuSection = styled.div`
  color: #ffffff;
  font-size: large;
  letter-spacing: 0.5px;
`;
export const UserArticle = styled.span`
  padding: 10px;
  cursor: pointer;
  :hover {
    font-weight: 600;
  }
`;
export const MenuArticle = styled.span`
  padding: 10px;
  :hover {
    color: #ffcd2f;
    font-weight: 600;
  }
  cursor: pointer;
`;
