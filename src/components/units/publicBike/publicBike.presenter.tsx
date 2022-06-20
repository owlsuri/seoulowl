import * as S from "./publicBike.styles";

export default function PublicBikeUI(props) {
  return (
    <S.PublicBike>
      <S.PublicBikeSubTitleSection>🚲🌉🚴‍♀️</S.PublicBikeSubTitleSection>
      <S.PublicBikeTitleSection>서울시 따릉이 현황</S.PublicBikeTitleSection>
      <S.PublicBikeSection>
        <S.PublicBikeMapArticle>여기에 지도</S.PublicBikeMapArticle>
        <S.PublicBikeInfoArticle>
          <S.Station>
            <S.Label>따릉이 위치</S.Label>
            {props.station?.map((el, index) => (
              <S.Column key={index}>
                <div>{el.slice(5, 20)}</div>
              </S.Column>
            ))}
          </S.Station>
          <S.Bike>
            <S.Label>이용가능한 따릉이</S.Label>
            {props.bikeCnt.map((el, index) => (
              <S.Column key={index}>
                <div>{el}</div>
              </S.Column>
            ))}
          </S.Bike>
        </S.PublicBikeInfoArticle>
      </S.PublicBikeSection>
    </S.PublicBike>
  );
}
