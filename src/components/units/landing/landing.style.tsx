import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const LandingPageSection = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/backgroundImages/seoul3.jpg");
  background-size: cover;
  background-attachment: fixed;

  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${breakPoints.mobile} {
    width: 100vh;
    height: 100vh;
  }
  @media ${breakPoints.tablet} {
    width: 100vh;
    height: 102vh;
  }
`;
export const LandingPageLogoArticle = styled.div`
  padding: 100px 0 20px 0;
`;
export const Logo = styled.img`
  width: 700px;
  @media ${breakPoints.mobile} {
    width: 350px;
  }
  @media ${breakPoints.tablet} {
    width: 600px;
  }
`;
export const LandingPageIntroArticle = styled.div`
  .container {
    width: 450px;
    position: relative;
    text-align: center;
    @media ${breakPoints.mobile} {
      width: 250px;
    }
    @media ${breakPoints.tablet} {
      width: 400px;
    }
  }

  h1,
  h2 {
    font-size: 60px;
    font-weight: 600;
    text-shadow: 5px 5px 10px rgba(3, 3, 3, 0.5);
    text-transform: uppercase;
    @media ${breakPoints.mobile} {
      font-size: 30px;
    }
    @media ${breakPoints.tablet} {
      font-size: 50px;
    }

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
      animation-duration: 10s;
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
      animation-delay: 10.1s;
      -webkit-animation-fill-mode: forwards;

      &:first-child {
        animation-delay: 10.2s;
      }

      &:last-child {
        color: #ffcd2f;
      }
      animation-iteration-count: infinite;
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
export const MenuContainer = styled.div`
  width: 200px;
  height: 200px;
  background-color: #ffffff;
  margin: 30px;
  border-radius: 10px;
  opacity: 0.9;
  cursor: pointer;
  overflow: hidden;
  @media ${breakPoints.mobile} {
    width: 100px;
    height: 100px;
    margin: 10px;
  }
  @media ${breakPoints.tablet} {
    width: 180px;
    height: 180px;
    margin: 15px;
  }
`;
export const Menu = styled.div`
  width: 200px;
  height: 200px;
  :hover {
    transform: translateY(-100%);
  }
  @media ${breakPoints.mobile} {
    width: 100px;
    height: 100px;
  }
  @media ${breakPoints.tablet} {
    width: 180px;
    height: 180px;
  }
`;
export const UpperBox = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    width: 100px;
    height: 100px;
  }
  @media ${breakPoints.tablet} {
    width: 180px;
    height: 180px;
  }
`;
export const BottomBox = styled.div`
  width: 200px;
  height: 200px;
  color: #fff;
  background-color: #213e6d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    width: 100px;
    height: 100px;
  }
  @media ${breakPoints.tablet} {
    width: 180px;
    height: 180px;
  }
`;
export const MenuImage = styled.img`
  width: 100px;
  opacity: 1;
  @media ${breakPoints.mobile} {
    width: 50px;
  }
  @media ${breakPoints.tablet} {
    width: 80px;
  }
`;
export const MenuName = styled.div`
  font-size: 25px;
  font-weight: 600;
  opacity: 1;
  padding-bottom: 20px;
  @media ${breakPoints.mobile} {
    font-size: 15px;
    padding-bottom: 10px;
  }
`;
export const MenuSubName = styled.div`
  font-size: 12px;
  font-weight: 600;
  opacity: 1;
  @media ${breakPoints.mobile} {
    font-size: 7px;
  }
`;
export const MoveBtn = styled.div`
  width: 40px;
  height: 40px;
  opacity: 1;
  font-size: 16px;
  font-weight: 600;
  color: #213e6d;
  background-color: #fff;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    background-color: #ffcd2f;
  }
  @media ${breakPoints.mobile} {
    width: 30px;
    height: 30px;
    font-size: 10px;
  }
`;
