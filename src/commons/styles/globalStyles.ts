import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: "MyFont";
    letter-spacing: 0.5px;
  }
  // 다운 받은 폰트 사용하기
  @font-face {
    font-family: "MyFont";
    src: url(/fonts/HGGGothicssi40g.ttf);
  }
`;
