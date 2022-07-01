import { IUserInfoCardProps } from "../mypage.types";
import * as S from "./userInfoCard.styles";

export default function UserInfoCardUI(props: IUserInfoCardProps) {
  const NAVIGATION_MENU = [
    {
      index: 1,
      name: "장바구니",
      page: "cart",
      total: props.basketItems.length,
    },
    {
      index: 2,
      name: "찜한상품",
      page: "pick",
      total: props.pickedCount?.fetchUseditemsCountIPicked,
    },
    {
      index: 3,
      name: "구매한 상품",
      page: "buy",
      total: props.buyingCount?.fetchPointTransactionsCountOfBuying,
    },
    {
      index: 4,
      name: "판매한 상품",
      page: "sell",
      total: props.sellingCount?.fetchPointTransactionsCountOfSelling,
    },
    {
      index: 5,
      name: "포인트",
      page: "point",
      total: props.userInfo?.userPoint?.amount,
    },
  ];

  return (
    <>
      <S.UserInfoCardSection>
        <S.UserInfoArticle>
          SeoulOwL <span>{props.userInfo.name}</span>님의 마이페이지
        </S.UserInfoArticle>
        <S.UserDataArticle>
          {NAVIGATION_MENU.map((el) => (
            <S.Element key={el.index}>
              <S.Name>{el.name}</S.Name>
              <S.Amount>{el.total?.toLocaleString("ko-KR")}</S.Amount>
            </S.Element>
          ))}
        </S.UserDataArticle>
      </S.UserInfoCardSection>
      <S.TapSection>
        {NAVIGATION_MENU.map((el) => (
          <S.TapArticle
            key={el.index}
            id={el.page}
            isSelected={props.isSelected}
          >
            <S.TapName
              id={el.page}
              isSelected={props.isSelected}
              onClick={props.onClickSelectMenu}
            >
              {el.name}
            </S.TapName>
          </S.TapArticle>
        ))}
      </S.TapSection>
    </>
  );
}
