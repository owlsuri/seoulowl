import { useRouter } from "next/router";
import LayoutFooter from "./footer";
import LayoutHeader from "./header/header.container";

const HIDDEN_HEADERS = ["/"];

export default function Layout(props) {
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      <div>{props.children}</div>
      <LayoutFooter />
    </>
  );
}
