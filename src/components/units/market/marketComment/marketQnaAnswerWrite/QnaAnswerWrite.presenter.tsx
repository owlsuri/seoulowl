import * as S from "./QnaAnswerWrite.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

export default function QnaAnswerWriteUI(props) {
  return (
    <S.QnaAnswerWrite>
      <S.QnaAnswerWriteSection>
        <S.QnaAnswerWriteTitleArticle>
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            color="#6888B2"
            size="2x"
          />
        </S.QnaAnswerWriteTitleArticle>
        <S.QnaAnswerWriteInputArticle>
          <S.CommentInput
            maxLength={100}
            onChange={props.OnChangeAnswer}
            defaultValue={props.contents || props.qnaAnswerEl?.contents || ""}
            placeholder="개인정보를 공유 및 요청하거나 명예회손, 무단광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에대한 책임은 게시자에게 있습니다."
          />
          <S.CommentInputBottom>
            <S.CommentCount>{props.qnaAnswer.length}/100</S.CommentCount>
            <S.CommentInputBtn
              onClick={props.isEdit ? props.onClickUpdate : props.onClickAnswer}
            >
              {props.isEdit ? "수정" : "등록"}하기
            </S.CommentInputBtn>
          </S.CommentInputBottom>
        </S.QnaAnswerWriteInputArticle>
      </S.QnaAnswerWriteSection>
    </S.QnaAnswerWrite>
  );
}
