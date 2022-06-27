import * as S from "./mypage.styles";
import Buy from "./mypageMenus/buy/buy";
import Point from "./mypageMenus/point/point";
import Sell from "./mypageMenus/sell/sell";
import UserInfoCard from "./userInfoCard/userInfoCard.container";

export default function MypageUI(props) {
  return (
    <S.Mypage>
      <S.MypageSection>
        <S.MypageUserInfoArticle>
          <UserInfoCard
            isSelected={props.isSelected}
            setIsSelected={props.setIsSelected}
            setIsOpen={props.setIsOpen}
          />
        </S.MypageUserInfoArticle>
        <S.MypageNavigationArticle>
          {props.isOpen && <S.Menu>장바구니</S.Menu>}
          {props.isSelected === "cart" && <S.Menu>장바구니</S.Menu>}
          {props.isSelected === "pick" && <S.Menu>찜</S.Menu>}
          {props.isSelected === "buy" && <Buy />}
          {props.isSelected === "sell" && <Sell />}
          {props.isSelected === "point" && <Point />}
        </S.MypageNavigationArticle>
      </S.MypageSection>
    </S.Mypage>
  );
}
