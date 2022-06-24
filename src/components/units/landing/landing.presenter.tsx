import * as S from "./landing.style";
export default function LandingUI() {
  return (
    <S.LandingPageSection>
      <S.LandingPageLogoArticle>
        <S.Logo src="/images/logoWhite.png" />
      </S.LandingPageLogoArticle>
      <S.LandingPageIntroArticle>
        <section className="container">
          <h1 className="title">
            <span>Hi, Owl!</span>
            <span>오늘도 잠못드는</span>
            <span>서울사람?</span>
          </h1>

          <h2 className="title">
            <span>일,</span>
            <span>집 값,</span>
            <span>벚꽃 말고</span>
          </h2>
        </section>
      </S.LandingPageIntroArticle>
      <S.LandingPageMenuArticle>
        <S.Menu>수다방</S.Menu>
        <S.Menu>중고장터</S.Menu>
        <S.Menu>Are you Conneted ?</S.Menu>
      </S.LandingPageMenuArticle>
    </S.LandingPageSection>
  );
}
