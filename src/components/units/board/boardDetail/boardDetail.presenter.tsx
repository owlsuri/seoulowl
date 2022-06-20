import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { getDate } from "../../../../commons/libraries/getDate";
import * as S from "./boardDetail.styles";
import Dompurify from "dompurify";
import ReactPlayer from "react-player";
import { Tooltip } from "antd";
import BasicModal from "../../../commons/modal/basic/basicModal";
import ErrorModal from "../../../commons/modal/error/errorModal";
import { useState } from "react";
import BoardWrite from "../boardWrite/boardWrite.container";
import { IBoardDetailProps } from "./boardDetail.types";
import BoardCommentWrite from "../boardComment/commentWrite/commentWrite.container";

export default function BoardDetailUI(props: IBoardDetailProps) {
  const [isEdit, setIsEdit] = useState(false);
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <>
      {props.alertModal && (
        <BasicModal
          onClickExit={props.onClickRoutingModal}
          contents={props.modalContents}
        />
      )}

      {props.errorAlertModal && (
        <ErrorModal
          onClickExit={props.onClickErrorModal}
          contents={props.modalContents}
        />
      )}
      <S.BoardDetailSection>
        <S.BoardDetailArticle>
          <S.UserInfoContainer>
            <S.UserInfo>
              <S.UserImg src="/images/profile-user.png" />
              <S.WriteInfo>
                <S.Writer>
                  {props.data ? props.data?.fetchBoard.writer : "loading..."}
                </S.Writer>
                <S.CreatedAt>
                  {props.data
                    ? getDate(props.data?.fetchBoard.createdAt)
                    : "loading..."}
                </S.CreatedAt>
              </S.WriteInfo>
            </S.UserInfo>
            <Tooltip
              overlayInnerStyle={{
                borderRadius: "8px",
                textAlign: "center",
              }}
              placement="left"
              title={`${props.data?.fetchBoard?.boardAddress?.address}
                    ${props.data?.fetchBoard?.boardAddress?.addressDetail}`}
            >
              <S.Location src="/images/pin.png" />
            </Tooltip>
          </S.UserInfoContainer>
          <S.ContentsContainer>
            <S.Title>
              {props.data ? props.data?.fetchBoard.title : "loading..."}
            </S.Title>
            <S.Images>
              {props.data?.fetchBoard.images
                ?.filter((el: string) => el)
                .map((el: string, index: number) => (
                  <S.Img
                    key={index}
                    src={`https://storage.googleapis.com/${el}`}
                  />
                ))}
            </S.Images>
            <S.Contents>
              {typeof window !== "undefined" && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: Dompurify.sanitize(props.data?.fetchBoard.contents),
                  }}
                />
              )}
            </S.Contents>
            <S.Youtube>
              {props.data?.fetchBoard.youtubeUrl && (
                <ReactPlayer url={String(props.data?.fetchBoard.youtubeUrl)} />
              )}
            </S.Youtube>
            <S.LikeBox>
              <S.Like onClick={props.onClickLike}>
                <S.LikeIcon />
                <S.LikeNum>
                  {props.data ? props.data.fetchBoard.likeCount : "loading..."}
                </S.LikeNum>
              </S.Like>
              <S.DisLike>
                <S.DisLikeIcon onClick={props.onClickDisLike} />
                <S.DisLikeNum>
                  {props.data
                    ? props.data.fetchBoard.dislikeCount
                    : "loading..."}
                </S.DisLikeNum>
              </S.DisLike>
            </S.LikeBox>
          </S.ContentsContainer>
          <S.Buttons>
            <S.Btn onClick={props.onClickToEdit}>수정하기</S.Btn>
            <S.Btn onClick={props.onClickDelete}>삭제하기</S.Btn>
            <S.Btn onClick={onClickMoveToPage("/board")}>목록으로</S.Btn>
          </S.Buttons>
        </S.BoardDetailArticle>
        <S.BoardCommentArticle>
          <BoardCommentWrite data={props.data} />
        </S.BoardCommentArticle>
      </S.BoardDetailSection>
      {isEdit && (
        <BoardWrite isEdit={true} data={props.data} setIsEdit={setIsEdit} />
      )}
    </>
  );
}
