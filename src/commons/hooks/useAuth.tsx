import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { FETCH_USER_LOGGED_IN } from "../../components/units/login/login.queries";
import { accessTokenState } from "../store";

export function useAuth() {
  const [accessToken] = useRecoilState(accessTokenState);

  const { data: userInfo } = useQuery(FETCH_USER_LOGGED_IN);

  const router = useRouter();

  useEffect(() => {
    if (!accessToken) {
      alert("로그인 후 이용이 가능 합니다!");
      router.push("/login");
    }
  }, []);
}
