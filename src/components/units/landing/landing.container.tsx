import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import * as S from "./landing.style";
import Head from "next/head";

export default function Landing() {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <>
      <Head>
        <title>🌙SeoulOwL🦉</title>
      </Head>
      <S.LandingPageSection>
        <S.LandingPageLogoArticle>
          <S.Logo src="/images/logoWhite.png" />
        </S.LandingPageLogoArticle>
        <S.LandingPageIntroArticle>
          <section className="container">
            <h1 className="title">
              <span>일,</span>
              <span>집 값,</span>
              <span>벚꽃 말고</span>
            </h1>

            <h2 className="title">
              <span>오늘도 잠 안오는</span>
              <span>서울사람?</span>
              <span>Hi, OwL!</span>
            </h2>
          </section>
        </S.LandingPageIntroArticle>
        <S.LandingPageMenuArticle>
          <S.MenuContainer>
            <S.Menu>
              <S.UpperBox>
                <S.MenuImage src="/images/owlchat.png" />
              </S.UpperBox>
              <S.BottomBox>
                <S.MenuSubName>😁🤬🥰😥</S.MenuSubName>
                <S.MenuName>수다방</S.MenuName>
                <S.MoveBtn onClick={onClickMoveToPage("/board")}>Go</S.MoveBtn>
              </S.BottomBox>
            </S.Menu>
          </S.MenuContainer>
          <S.MenuContainer>
            <S.Menu>
              <S.UpperBox>
                <S.MenuImage src="/images/owlpin.png" />
              </S.UpperBox>
              <S.BottomBox>
                <S.MenuSubName>🛒👖👟🥊✨🥕</S.MenuSubName>
                <S.MenuName>중고마켓</S.MenuName>
                <S.MoveBtn onClick={onClickMoveToPage("/market")}>Go</S.MoveBtn>
              </S.BottomBox>
            </S.Menu>
          </S.MenuContainer>
          <S.MenuContainer>
            <S.Menu>
              <S.UpperBox>
                <S.MenuImage src="/images/owl.png" />
              </S.UpperBox>
              <S.BottomBox>
                <S.MenuSubName>🌞⭐🌙</S.MenuSubName>
                <S.MenuName>SeoulOwL?</S.MenuName>
                <S.MoveBtn onClick={onClickMoveToPage("/login")}>Go</S.MoveBtn>
              </S.BottomBox>
            </S.Menu>
          </S.MenuContainer>
        </S.LandingPageMenuArticle>
      </S.LandingPageSection>
    </>
  );
}
