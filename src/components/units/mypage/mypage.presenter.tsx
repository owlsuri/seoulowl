import * as S from "./mypage.styles";
import { IMyPageProps } from "./mypage.types";
import Buy from "./mypageMenus/buy/buy";
import Cart from "./mypageMenus/cart/cart";
import Pick from "./mypageMenus/pick/pick";
import Point from "./mypageMenus/point/point";
import Sell from "./mypageMenus/sell/sell";
import UserInfoCard from "./userInfoCard/userInfoCard.container";

export default function MypageUI(props: IMyPageProps) {
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
            buyingCount={props.buyingCount}
            basketItems={props.basketItems}
            pickedCount={props.pickedCount}
            sellingCount={props.sellingCount}
          />
        </S.MypageUserInfoArticle>
        <S.MypageDetailArticle>
          {props.isSelected === "cart" && (
            <Cart basketItems={props.basketItems} />
          )}
          {props.isSelected === "pick" && (
            <Pick pickedCount={props.pickedCount} />
          )}
          {props.isSelected === "buy" && (
            <Buy buyingCount={props.buyingCount} />
          )}
          {props.isSelected === "sell" && (
            <Sell sellingCount={props.sellingCount} />
          )}
          {props.isSelected === "point" && <Point />}
        </S.MypageDetailArticle>
      </S.MypageSection>
    </S.Mypage>
  );
}
