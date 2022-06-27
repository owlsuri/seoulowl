import styled from "@emotion/styled";

export const UserInfoCardSection = styled.div`
  width: 300px;
  background-color: #fff;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const UserImage = styled.img`
  width: 120px;
`;
export const UserInfoArticle = styled.div`
  width: 200px;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #dbdbdb;
`;
export const UserName = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
export const UserEmail = styled.div`
  color: #a6a6a6;
`;
export const UserNavigationArticle = styled.div`
  padding: 10px 0;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;
export const Menu = styled.div`
  width: 200px;
  height: 40px;
  text-align: center;
  padding: 10px 0;
  font-weight: 600;
  background-color: ${(props) => (props.isSelected ? "#213e6d" : "")};
  /* color: #213e6d; */
  /* #ffcd2f */
  cursor: pointer;
  :hover {
    color: #ffcd2f;
  }
`;
