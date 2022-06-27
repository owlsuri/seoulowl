import styled from "@emotion/styled";

export const Header = styled.div`
  width: 100%;
  background-color: #213e6d60;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 3;
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
  display: flex;
  align-items: center;
`;
export const HeaderMenuSection = styled.div`
  color: #ffffff;
  font-size: large;
  letter-spacing: 0.5px;
`;
export const UserArticle = styled.div`
  padding: 10px;
  cursor: pointer;
  :hover {
    text-shadow: 0 0 2px, 0 0 5px;
  }
`;
export const UserArticleCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding-right: 7px;
`;
export const CartCount = styled.div`
  width: 15px;
  height: 18px;
  font-size: 13px;
  color: #213e6d;
  font-weight: 600;
  background-color: #ffcd2f;
  border-radius: 5px;
  margin-left: -7px;
  padding-top: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const UserArticlePoint = styled.div`
  padding: 10px;
  font-size: 15px;
  cursor: pointer;
  font-weight: 600;
  color: #ffcd2f;
`;
export const MenuArticle = styled.span`
  padding: 10px;
  :hover {
    color: #e5f8ff;
    text-shadow: 0 0 2px, 0 0 5px;
  }
  cursor: pointer;
`;
