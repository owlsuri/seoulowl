import * as S from "./commentWrite.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { Rate } from "antd";
import BasicModal from "../../../../commons/modal/basic/basicModal";
import ErrorModal from "../../../../commons/modal/error/errorModal";
import { IBoardCommentWriteProps } from "./commentWrite.types";

export default function BoardCommentWriteUI(props: IBoardCommentWriteProps) {
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
      <S.CommentWrite>
        <S.CommentWriteSection>
          <S.CommentTitleArticle>
            <FontAwesomeIcon icon={faComment} color="#6888B2" />
            <S.CommentTitle>
              {props.isCommentEdit ? "댓글수정" : "댓글"}
            </S.CommentTitle>
          </S.CommentTitleArticle>
          <S.CommentUserArticle>
            <S.CommentUserInput
              id="writer"
              onChange={props.onChangeInputs}
              type="text"
              placeholder="작성자"
              defaultValue={props.inputs.writer || props.el?.writer || ""}
            />
            <S.CommentUserInput
              id="password"
              onChange={props.onChangeInputs}
              type="password"
              placeholder="비밀번호"
            />
            <S.CommentStarArticle>
              <Rate
                onChange={props.onChangeRating}
                value={props.rating || props.el?.rating}
              ></Rate>
            </S.CommentStarArticle>
          </S.CommentUserArticle>
          <S.CommentInputArticle>
            <S.CommentInput
              id="contents"
              maxLength={100}
              defaultValue={props.inputs.contents || props.el?.contents || ""}
              onChange={props.onChangeInputs}
              placeholder="개인정보를 공유 및 요청하거나 명예회손, 무단광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에대한 책임은 게시자에게 있습니다."
            />
            <S.CommentInputBottom>
              <S.CommentCount>
                {props.inputs.contents?.length}/100
              </S.CommentCount>
              <S.CommentInputBtn
                onClick={
                  props.isCommentEdit
                    ? props.onClickCommentEdit
                    : props.onClickComment
                }
              >
                {props.isCommentEdit ? "수정" : "등록"}하기
              </S.CommentInputBtn>
            </S.CommentInputBottom>
          </S.CommentInputArticle>
        </S.CommentWriteSection>
      </S.CommentWrite>
    </>
  );
}
