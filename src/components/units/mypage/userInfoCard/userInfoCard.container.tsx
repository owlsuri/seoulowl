import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "../../login/login.queries";
import UserInfoCardUI from "./userInfoCard.presenter";

export default function UserInfoCard(props: any) {
  const { data: userInfo } = useQuery(FETCH_USER_LOGGED_IN);

  const onClickSelectMenu = (event: any) => {
    props.setIsSelected(event.target.id);
  };

  return (
    <UserInfoCardUI
      userInfo={userInfo}
      onClickSelectMenu={onClickSelectMenu}
      isSelected={props.isSelected}
      buyingCount={props.buyingCount}
      basketItems={props.basketItems}
      pickedCount={props.pickedCount}
      sellingCount={props.sellingCount}
    />
  );
}
