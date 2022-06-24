import * as S from "./QnaList.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommenting, faPencil, faX } from "@fortawesome/free-solid-svg-icons";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import QnaWrite from "../marketQnaWrite/QnaWrite.container";
import { getDate } from "../../../../../commons/libraries/getDate";
import QnaAnswerWrite from "../marketQnaAnswerWrite/QnaAnswerWrite.container";
import QnaAnswerList from "../marketQnaAnswerList/QnaAnswerList.container";
import { IMarketQnaListItemProps } from "./QnaList.types";

export default function MarketQnAListItem(props: IMarketQnaListItemProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);

  const onClickQnaEdit = () => {
    setIsEdit(true);
  };

  const onClickAnswer = () => {
    setIsAnswer((prev) => !prev);
  };

  return (
    <>
      {!isEdit && (
        <S.MarketQnAList>
          <S.MarketQnAListSection>
            <S.MarketQnAListArticle>
              <S.CommentUserImg>
                <AccountCircleIcon fontSize="large" color="disabled" />
              </S.CommentUserImg>
              <S.CommentDescBox>
                <S.CommentUserInfo>
                  <S.CommentUserProfile>
                    <S.CommentUserName>{props.el?.user.name}</S.CommentUserName>
                  </S.CommentUserProfile>
                  <S.CommentIcon>
                    {props.userData?.fetchUserLoggedIn.email ===
                    props.el.user.email ? (
                      <>
                        <FontAwesomeIcon
                          onClick={onClickQnaEdit}
                          icon={faPencil}
                          color="#BDBDBD"
                          cursor="pointer"
                        />
                        <FontAwesomeIcon
                          id={props.el._id}
                          onClick={props.onClickDelete}
                          icon={faX}
                          color="#BDBDBD"
                          cursor="pointer"
                        />
                      </>
                    ) : (
                      ""
                    )}
                  </S.CommentIcon>
                </S.CommentUserInfo>
                <S.CommentDesc>
                  <S.Comment>{props.el?.contents}</S.Comment>
                  <S.AnswerIcon>
                    <S.CommentDate>
                      {getDate(props.el?.createdAt)}
                    </S.CommentDate>
                    <FontAwesomeIcon
                      onClick={onClickAnswer}
                      icon={faCommenting}
                      color="#BDBDBD"
                      cursor="pointer"
                    />
                  </S.AnswerIcon>
                </S.CommentDesc>
              </S.CommentDescBox>
            </S.MarketQnAListArticle>
          </S.MarketQnAListSection>
        </S.MarketQnAList>
      )}
      {isEdit && <QnaWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />}
      {isAnswer && (
        <QnaAnswerWrite
          el={props.el}
          isAnswer={isAnswer}
          setIsAnswer={setIsAnswer}
        />
      )}
      <QnaAnswerList
        isAnswer={isAnswer}
        setIsAnswer={setIsAnswer}
        data={props.data}
        el={props.el}
      />
    </>
  );
}
