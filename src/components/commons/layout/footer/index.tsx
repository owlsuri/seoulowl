import styled from "@emotion/styled";

const Footer = styled.div`
  padding: 30px 0;
  border-top: 1px solid #e5e5e5;
`;
const FooterMenuSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

const FooterMenuArticle = styled.span`
  color: #111111;
  border-right: 1px solid #dbdbdb;
  padding: 0 20px;
`;
const FooterMenuArticleLast = styled.span`
  color: #111111;
  padding: 0 20px;
`;
const FooterSnsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;
const FooterSnsArticle = styled.img`
  width: 80px;
  margin: 5px;
`;

export default function LayoutFooter() {
  return (
    <Footer>
      <FooterMenuSection>
        <FooterMenuArticle>회사소개</FooterMenuArticle>
        <FooterMenuArticle>이용약관</FooterMenuArticle>
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
