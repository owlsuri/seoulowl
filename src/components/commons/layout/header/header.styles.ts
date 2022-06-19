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
  width: 250px;
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
    text-shadow: 0 0 2px, 0 0 5px;
  }
`;
export const UserArticlePoint = styled.span`
  padding: 10px;
  cursor: pointer;
  font-weight: 600;
  color: #ffcd2f;
`;
export const MenuArticle = styled.span`
  padding: 10px;
  :hover {
    color: #ffcd2f;
    text-shadow: 0 0 2px, 0 0 5px;
  }
  cursor: pointer;
`;
