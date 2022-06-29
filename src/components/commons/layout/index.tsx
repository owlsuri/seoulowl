import styled from "@emotion/styled";
import { useRouter } from "next/router";
import LayoutFooter from "./footer";
import LayoutHeader from "./header/header.container";
import WatchList from "./watch/watch";

const LayoutSection = styled.div`
  width: 100%;
`;
const Children = styled.div`
  display: flex;
`;
const Watch = styled.div`
  max-width: 1400px;
  position: absolute;
  position: fixed;
  top: 370px;
  right: 7%;
`;

const HIDDEN_HEADERS = ["/"];
const SHOW_WATCHLIST = ["/market", "/market/[useditemId]", "/mypage"];

export default function Layout(props) {
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  const isShowWatchList = SHOW_WATCHLIST.includes(router.pathname);

  return (
    <LayoutSection>
      {!isHiddenHeader && <LayoutHeader />}
      <Children>
        {props.children}
        {isShowWatchList && (
          <Watch>
            <WatchList />
          </Watch>
        )}
      </Children>
      <LayoutFooter />
    </LayoutSection>
  );
}
