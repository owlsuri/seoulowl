import * as S from "./mypage.styles";
import Buy from "./mypageMenus/buy/buy";
import Cart from "./mypageMenus/cart/cart";
import Pick from "./mypageMenus/pick/pick";
import Point from "./mypageMenus/point/point";
import Sell from "./mypageMenus/sell/sell";
import UserInfoCard from "./userInfoCard/userInfoCard.container";

export default function MypageUI(props) {
  return (
    <S.Mypage>
      <div>
        <S.MypageSubTitleSection>👦🏾👩🏻👧🏾🧑🏻</S.MypageSubTitleSection>
        <S.MypageTitleSection>마이페이지</S.MypageTitleSection>
      </div>
      <S.MypageSection>
        <S.MypageUserInfoArticle>
          <UserInfoCard
            isSelected={props.isSelected}
            setIsSelected={props.setIsSelected}
            setIsOpen={props.setIsOpen}
          />
        </S.MypageUserInfoArticle>
        <S.MypageNavigationArticle>
          {props.isOpen && <Cart />}
          {props.isSelected === "cart" && <Cart />}
          {props.isSelected === "pick" && <Pick />}
          {props.isSelected === "buy" && <Buy />}
          {props.isSelected === "sell" && <Sell />}
          {props.isSelected === "point" && <Point />}
        </S.MypageNavigationArticle>
      </S.MypageSection>
    </S.Mypage>
  );
}
