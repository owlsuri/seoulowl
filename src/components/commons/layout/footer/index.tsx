import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

const Footer = styled.div`
  padding: 30px 0;
  border-top: 1px solid #e5e5e5;
  @media ${breakPoints.mobile} {
    padding: 10px 0;
  }
`;
const FooterMenuSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;
const FooterMenuArticleIntro = styled.span`
  color: #111111;
  border-right: 1px solid #dbdbdb;
  padding: 0 20px;
  @media ${breakPoints.mobile} {
    font-size: smaller;
  }
`;

const FooterMenuArticle = styled.span`
  color: #111111;
  border-right: 1px solid #dbdbdb;
  padding: 0 20px;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;
const FooterMenuArticleLast = styled.span`
  color: #111111;
  padding: 0 20px;
`;
const FooterSnsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;
const FooterSnsArticle = styled.img`
  width: 80px;
  margin: 5px;
  @media ${breakPoints.mobile} {
    width: 30px;
    margin: 0 3px;
  }
`;

export default function LayoutFooter() {
  return (
    <Footer>
      <FooterMenuSection>
        <FooterMenuArticleIntro>회사소개</FooterMenuArticleIntro>
        <FooterMenuArticleIntro>이용약관</FooterMenuArticleIntro>
        <FooterMenuArticle>개인정보방침처리</FooterMenuArticle>
        <FooterMenuArticle>청소년보호방침</FooterMenuArticle>
        <FooterMenuArticle>입점/제휴문의</FooterMenuArticle>
        <FooterMenuArticleLast>기타안내</FooterMenuArticleLast>
      </FooterMenuSection>
      <FooterSnsSection>
        <FooterSnsArticle src="/images/facebook.png" />
        <FooterSnsArticle src="/images/youtube.png" />
        <FooterSnsArticle src="/images/instagram.png" />
      </FooterSnsSection>
    </Footer>
  );
}
