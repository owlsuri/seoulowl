import * as S from "./QnaWrite.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { IMarketQnaWriteProps } from "./QnaWrite.types";

export default function QnaWriteUI(props: IMarketQnaWriteProps) {
  return (
    <S.MarketQnA>
      <form
        onSubmit={props.handleSubmit(
          props.isEdit ? props.onClickUpdateQna : props.onClickAsk
        )}
      >
        <S.MarketQnASection>
          <S.MarketQnATitleArticle>
            <FontAwesomeIcon icon={faQuestionCircle} color="#6888B2" />
            <S.CommentTitle>
              {props.isEdit ? "수정" : "문의"}하기
            </S.CommentTitle>
          </S.MarketQnATitleArticle>
          <S.MarketQnAInputArticle>
            <S.CommentInput
              maxLength={100}
              defaultValue={props.el?.contents || ""}
              {...props.register("contents")}
              placeholder="개인정보를 공유 및 요청하거나 명예회손, 무단광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에대한 책임은 게시자에게 있습니다."
            />
            <S.CommentInputBottom>
              <S.CommentCount>
                {props.watch()?.contents?.length}/100
              </S.CommentCount>
              <S.CommentInputBtn>
                {props.isEdit ? "수정" : "문의"}하기
              </S.CommentInputBtn>
            </S.CommentInputBottom>
          </S.MarketQnAInputArticle>
        </S.MarketQnASection>
      </form>
    </S.MarketQnA>
  );
}
