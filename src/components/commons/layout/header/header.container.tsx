import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, basketItemState } from "../../../../commons/store";
import { FETCH_USER_LOGGED_IN } from "../../../units/login/login.queries";
import LayoutHeaderUI from "./header.presenter";
import { LOGOUT_USER } from "./header.queries";

export default function LayoutHeader() {
  const router = useRouter();
  const clickRef = useRef<HTMLInputElement>(null);

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const [logoutUser] = useMutation(LOGOUT_USER);

  const { data: userInfo } = useQuery(FETCH_USER_LOGGED_IN);

  const [basketItems, setBasketItems] = useRecoilState(basketItemState);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItems(baskets);
  }, []);

  const onClickLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      alert(error);
    }
    setAccessToken("");
    router.push("/");
  };

  const onClickCharge = () => {
    clickRef.current?.click();
  };

  const onClickToLogin = () => {
    alert("로그인 후 이용해주세요.");
    router.push("/login");
  };

  return (
    <LayoutHeaderUI
      accessToken={accessToken}
      userInfo={userInfo}
      onClickLogout={onClickLogout}
      onClickCharge={onClickCharge}
      clickRef={clickRef}
      basketItems={basketItems}
      onClickToLogin={onClickToLogin}
    />
  );
}
