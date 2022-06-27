import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../store";

export function useAuth() {
  const [userInfo] = useRecoilState(userInfoState);
  const [accessToken] = useRecoilState(accessTokenState);

  const router = useRouter();

  useEffect(() => {
    if (!userInfo.email.length && !accessToken.length) {
      alert("로그인 후 이용이 가능 합니다!");
      router.push("/login");
    }
  }, []);
}
