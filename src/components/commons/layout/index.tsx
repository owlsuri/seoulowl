import styled from "@emotion/styled";
import LayoutFooter from "./footer";
import LayoutHeader from "./header/header.container";

export default function Layout(props) {
  return (
    <>
      <LayoutHeader />
      <div>{props.children}</div>
      <LayoutFooter />
    </>
  );
}
