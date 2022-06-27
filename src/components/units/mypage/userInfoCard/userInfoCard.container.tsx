import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/store";
import UserInfoCardUI from "./userInfoCard.presenter";

export default function UserInfoCard(props: any) {
  const [userInfo] = useRecoilState(userInfoState);

  const onClickSelectMenu = (event) => {
    props.setIsSelected(event.target.id);
    props.setIsOpen(false);
  };

  return (
    <UserInfoCardUI
      userInfo={userInfo}
      onClickSelectMenu={onClickSelectMenu}
      isSelected={props.isSelected}
    />
  );
}
