import styled from "@emotion/styled";

export const Wrapper=styled.div`
    background-image: url('/landingImages/seoul1.jpg');
    width: 100%;
    height: 100%;
`

export default function Home() {
  return (
    <>
    <Wrapper>랜딩페이지</Wrapper>
    </>
  )
}
