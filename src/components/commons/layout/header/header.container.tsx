import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRef } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, publicBikeState } from "../../../../commons/store";
import LayoutHeaderUI from "./header.presenter";
import { FETCH_USER_LOGGED_IN, LOGOUT_USER } from "./header.queries";

export default function LayoutHeader() {
  const router = useRouter();
  const clickRef = useRef<HTMLInputElement>(null);

  const [accessToken] = useRecoilState(accessTokenState);
  const [, setPublicBike] = useRecoilState(publicBikeState);

  const [logoutUser] = useMutation(LOGOUT_USER);
  const { data: userInfo } = useQuery(FETCH_USER_LOGGED_IN);

  const onClickLogout = () => {
    setPublicBike("");
    logoutUser();
    location.reload();
    router.push("/");
  };

  const onClickCharge = () => {
    clickRef.current?.click();
  };

  return (
    <LayoutHeaderUI
      accessToken={accessToken}
      userInfo={userInfo}
      onClickLogout={onClickLogout}
      onClickCharge={onClickCharge}
      clickRef={clickRef}
    />
  );
}
