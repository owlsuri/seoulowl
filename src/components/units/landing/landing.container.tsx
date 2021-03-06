import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import * as S from "./landing.style";
import Head from "next/head";

export default function Landing() {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <>
      <Head>
        <title>πSeoulOwLπ¦</title>
      </Head>
      <S.LandingPageSection>
        <S.LandingPageLogoArticle>
          <S.Logo src="/images/logoWhite.png" />
        </S.LandingPageLogoArticle>
        <S.LandingPageIntroArticle>
          <section className="container">
            <h1 className="title">
              <span>μΌ,</span>
              <span>μ§ κ°,</span>
              <span>λ²κ½ λ§κ³ </span>
            </h1>

            <h2 className="title">
              <span>μ€λλ μ  μμ€λ</span>
              <span>μμΈμ¬λ?</span>
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
                <S.MenuSubName>ππ€¬π₯°π₯</S.MenuSubName>
                <S.MenuName>μλ€λ°©</S.MenuName>
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
                <S.MenuSubName>ππππ₯β¨π₯</S.MenuSubName>
                <S.MenuName>μ€κ³ λ§μΌ</S.MenuName>
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
                <S.MenuSubName>πβ­π</S.MenuSubName>
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
