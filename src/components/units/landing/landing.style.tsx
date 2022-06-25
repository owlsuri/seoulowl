import styled from "@emotion/styled";

export const LandingPageSection = styled.div`
  width: 100%;
  height: 1000px;
  background-image: url("/backgroundImages/seoul3.jpg");
  background-size: cover;
  background-attachment: fixed;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LandingPageLogoArticle = styled.div`
  padding: 100px 0 20px 0;
`;
export const Logo = styled.img`
  width: 700px;
`;
export const LandingPageIntroArticle = styled.div`
  .container {
    width: 450px;
    /* height: 100px; */
    position: relative;
    text-align: center;
  }

  h1,
  h2 {
    font-size: 60px;
    text-transform: uppercase;

    span {
      width: 100%;
      float: left;
      color: #ffffff;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
      transform: translateY(-50px);
      opacity: 0;
      animation-name: titleAnimation;
      animation-timing-function: ease;
      animation-duration: 3s;
    }
  }
  h1 span {
    animation-delay: 0.6s;
    -webkit-animation-fill-mode: forwards;

    &:first-child {
      animation-delay: 0.7s;
    }

    &:last-child {
      color: #ffcd2f;
      animation-delay: 0.5s;
    }
  }

  h2 {
    top: 0;
    position: absolute;

    span {
      animation-delay: 4.1s;
      -webkit-animation-fill-mode: forwards;

      &:first-child {
        animation-delay: 4.2s;
      }

      &:last-child {
        color: #ffcd2f;
        animation-delay: 4s;
      }
    }
  }
  @keyframes titleAnimation {
    0% {
      transform: translateY(-50px);
      opacity: 0;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
    }
    20% {
      transform: translateY(0);
      opacity: 1;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
    }
    80% {
      transform: translateY(0);
      opacity: 1;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
    }
    100% {
      transform: translateY(50px);
      opacity: 0;
      -webkit-clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
      clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
    }
  }
`;

export const LandingPageMenuArticle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`;
export const Menu = styled.div`
  width: 200px;
  height: 200px;
  background-color: #ffffff;
  margin: 30px;
  border-radius: 10px;
  opacity: 0.9;
`;
