import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/store";
import UserInfoCardUI from "./userInfoCard.presenter";

export default function UserInfoCard(props: any) {
  const [userInfo] = useRecoilState(userInfoState);

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
