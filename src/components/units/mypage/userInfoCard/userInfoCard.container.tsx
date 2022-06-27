import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import { FETCH_USER_LOGGED_IN } from "../mypage.queries";
import UserInfoCardUI from "./userInfoCard.presenter";

export default function UserInfoCard(props) {
  const { data: userData } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const onClickSelectMenu = (event) => {
    props.setIsSelected(event.target.id);
    props.setIsOpen(false);
  };

  return (
    <UserInfoCardUI
      userData={userData}
      onClickSelectMenu={onClickSelectMenu}
      isSelected={props.isSelected}
    />
  );
}
