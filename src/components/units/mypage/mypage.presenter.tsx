import * as S from "./mypage.styles";
import { IMyPageProps } from "./mypage.types";
import Buy from "./mypageMenus/buy/buy";
import Cart from "./mypageMenus/cart/cart";
import Pick from "./mypageMenus/pick/pick";
import Point from "./mypageMenus/point/point";
import Sell from "./mypageMenus/sell/sell";
import UserInfoCard from "./userInfoCard/userInfoCard.container";
import Head from "next/head";

export default function MypageUI(props: IMyPageProps) {
  return (
    <>
      <Head>
        <title>ππ»ββοΈλ§μ΄νμ΄μ§ππ»ββοΈ</title>
      </Head>
      <S.Mypage>
        <div>
          <S.MypageSubTitleSection>π¦πΎπ©π»π§πΎπ§π»</S.MypageSubTitleSection>
          <S.MypageTitleSection>λ§μ΄νμ΄μ§</S.MypageTitleSection>
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
    </>
  );
}
