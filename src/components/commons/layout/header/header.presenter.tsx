import * as S from "./header.styles";
export default function LayoutHeaderUI() {
  return (
    <S.Header>
      <S.HeaderWrapper>
        <S.HeaderLogoSection>
          <S.HeaderLogo src="/images/logo.png" />
        </S.HeaderLogoSection>
        <S.HeaderMenu>
          <S.HeaderUserSection>
            <S.UserArticle>LOGIN</S.UserArticle>
            <S.UserArticle>SIGN UP</S.UserArticle>
            <S.UserArticle>CHARGE</S.UserArticle>
            <S.UserArticle>CART</S.UserArticle>
          </S.HeaderUserSection>
          <S.HeaderMenuSection>
            <S.MenuArticle>수다방</S.MenuArticle>
            <S.MenuArticle>중고장터</S.MenuArticle>
            <S.MenuArticle>따릉이</S.MenuArticle>
            <S.MenuArticle>한줄맛집</S.MenuArticle>
            <S.MenuArticle>마이페이지</S.MenuArticle>
          </S.HeaderMenuSection>
        </S.HeaderMenu>
      </S.HeaderWrapper>
    </S.Header>
  );
}
