import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Mypage = styled.div`
  width: 100%;
  padding: 150px;
  background-image: url(/backgroundImages/seoulnightview.jpg);
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${breakPoints.mobile} {
    padding: 200px 0 100px 0;
  }
`;
export const MypageSubTitleSection = styled.div`
  font-size: 20px;
  text-align: center;
  @media ${breakPoints.mobile} {
    font-size: 15px;
  }
  @media ${breakPoints.tablet} {
    font-size: 13px;
  }
`;
export const MypageTitleSection = styled.div`
  color: #fff;
  font-size: 40px;
  font-weight: 600;
  padding-bottom: 30px;
  text-align: center;
  @media ${breakPoints.mobile} {
    font-size: 20px;
    width: 360px;
  }
  @media ${breakPoints.tablet} {
    font-size: 30px;
    width: 760px;
  }
`;
export const MypageSection = styled.div`
  max-width: 1200px;
`;
export const MypageUserInfoArticle = styled.div``;
export const MypageDetailArticle = styled.div``;
