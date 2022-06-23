import { getDate } from "../../../../../commons/libraries/getDate";
import * as S from "./bestBoard.styles";
import { IBoardBestProps } from "./bestBoard.types";
export default function BestBoardUI(props: IBoardBestProps) {
  return (
    <S.BestBoardSection>
      <S.BestBoardArticle>
        {props.dataBoardBest?.fetchBoardsOfTheBest.map((el: any) => (
          <S.BestBox key={el._id} id={el._id} onClick={props.onClickDetail}>
            <S.BestImg
              src={
                el.images[0]
                  ? `https://storage.googleapis.com/${el.images?.[0]}`
                  : `/images/noimages.jpg`
              }
            />
            <S.Best>
              <S.TitleBox>
                <S.SubTitle>BEST</S.SubTitle>
                <S.Title>{el.title}</S.Title>
              </S.TitleBox>
              <S.Info>
                <div>
                  <S.WriterBox>
                    <S.WriterImg src="/images/profile-user.png" />
                    <S.WriterName>{el.writer}</S.WriterName>
                  </S.WriterBox>
                  <S.CreatedAt>Date : {getDate(el.createdAt)}</S.CreatedAt>
                </div>
                <S.Like>
                  <S.BestLikeIcon />
                  <S.BestLikeNum>{el.likeCount}</S.BestLikeNum>
                </S.Like>
              </S.Info>
            </S.Best>
          </S.BestBox>
        ))}
      </S.BestBoardArticle>
    </S.BestBoardSection>
  );
}
