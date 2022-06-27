import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import {
  accessTokenState,
  basketItemState,
  publicBikeState,
  userInfoState,
} from "../../../../commons/store";
import LayoutHeaderUI from "./header.presenter";
import { LOGOUT_USER } from "./header.queries";

export default function LayoutHeader() {
  const router = useRouter();
  const clickRef = useRef<HTMLInputElement>(null);

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo] = useRecoilState(userInfoState);
  const [, setPublicBike] = useRecoilState(publicBikeState);

  const [logoutUser] = useMutation(LOGOUT_USER);
  console.log("😎", userInfo);

  // 장바구니아이템 갯수
  const [basketItems, setBasketItems] = useRecoilState(basketItemState);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItems(baskets);
  }, []);

  const onClickLogout = async () => {
    setPublicBike("");
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

  return (
    <LayoutHeaderUI
      accessToken={accessToken}
      userInfo={userInfo}
      onClickLogout={onClickLogout}
      onClickCharge={onClickCharge}
      clickRef={clickRef}
      basketItems={basketItems}
    />
  );
}
