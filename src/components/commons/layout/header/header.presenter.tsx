import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import * as S from "./header.styles";
export default function LayoutHeaderUI(props) {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Header>
      <S.HeaderWrapper>
        <S.HeaderLogoSection>
          <S.HeaderLogo
            onClick={onClickMoveToPage("/")}
            src="/images/logo.png"
          />
        </S.HeaderLogoSection>
        <S.HeaderMenu>
          {props.accessToken ? (
            <S.HeaderUserSection>
              <S.UserArticlePoint>
                {props.userInfo?.fetchUserLoggedIn.name}님의 포인트 :{" "}
                {props.userInfo?.fetchUserLoggedIn.userPoint?.amount}P
              </S.UserArticlePoint>
              <S.UserArticle>CHARGE</S.UserArticle>
              <S.UserArticle>CART</S.UserArticle>
              <S.UserArticle onClick={props.onClickLogout}>
                LOGOUT
              </S.UserArticle>
            </S.HeaderUserSection>
          ) : (
            <S.HeaderUserSection>
              <S.UserArticle onClick={onClickMoveToPage("/login")}>
                LOGIN
              </S.UserArticle>
              <S.UserArticle onClick={onClickMoveToPage("/signup")}>
                SIGN UP
              </S.UserArticle>
              <S.UserArticle>CHARGE</S.UserArticle>
              <S.UserArticle>CART</S.UserArticle>
            </S.HeaderUserSection>
          )}
          <S.HeaderMenuSection>
            <S.MenuArticle onClick={onClickMoveToPage("/board")}>
              수다방
            </S.MenuArticle>
            <S.MenuArticle onClick={onClickMoveToPage("/market")}>
              중고마켓
            </S.MenuArticle>
            <S.MenuArticle onClick={onClickMoveToPage("/publicBike")}>
              따릉이
            </S.MenuArticle>
            <S.MenuArticle>한줄맛집</S.MenuArticle>
            <S.MenuArticle onClick={onClickMoveToPage("/mypage")}>
              마이페이지
            </S.MenuArticle>
          </S.HeaderMenuSection>
        </S.HeaderMenu>
      </S.HeaderWrapper>
    </S.Header>
  );
}
