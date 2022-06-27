import { Fragment } from "react";
import * as S from "./userInfoCard.styles";

export default function UserInfoCardUI(props) {
  const NAVIGATION_MENU = [
    { name: "CART", page: "cart", index: 1 },
    { name: "PICKED", page: "pick", index: 2 },
    { name: "구매한 상품", page: "buy", index: 3 },
    { name: "판매한 상품", page: "sell", index: 4 },
    { name: "포인트 이용 내역", page: "point", index: 5 },
  ];

  return (
    <S.UserInfoCardSection>
      <S.UserImage src="/images/profile-user.png" />
      <S.UserInfoArticle>
        <S.UserName>{props.userData?.fetchUserLoggedIn.name}</S.UserName>
        <S.UserEmail>{props.userData?.fetchUserLoggedIn.email}</S.UserEmail>
      </S.UserInfoArticle>
      <S.UserNavigationArticle>
        {NAVIGATION_MENU.map((el) => (
          <Fragment key={el.index}>
            <S.Menu id={el.page} onClick={props.onClickSelectMenu}>
              {el.name}
            </S.Menu>
          </Fragment>
        ))}
      </S.UserNavigationArticle>
    </S.UserInfoCardSection>
  );
}
