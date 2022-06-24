import * as S from "./QnaAnswerList.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPencil, faX } from "@fortawesome/free-solid-svg-icons";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import QnaAnswerWrite from "../marketQnaAnswerWrite/QnaAnswerWrite.container";
import { getDate } from "../../../../../commons/libraries/getDate";
import {
  IMarketQnaAnswerListItemProps,
  IMarketQnaAnswerListProps,
} from "./QnaAnswerList.types";

export default function QnaAnswerListItem(
  props: IMarketQnaAnswerListItemProps
) {
  const [isEdit, setIsEdit] = useState(false);

  const onClicktoUpdate = () => {
    setIsEdit(true);
  };

  return (
    <>
      {!isEdit && (
        <S.QnaAnswerList>
          <S.Arrow>
            <FontAwesomeIcon size="2x" icon={faArrowRight} color="#6888B2" />
          </S.Arrow>
          <div>
            <S.QnaAnswerListSection>
              <S.QnaAnswerListArticle>
                <S.CommentUserImg>
                  <AccountCircleIcon fontSize="large" color="disabled" />
                </S.CommentUserImg>
                <S.CommentDescBox>
                  <S.CommentUserInfo>
                    <S.CommentUserProfile>
                      <S.CommentUserName>
                        {props.el?.user.name}
                      </S.CommentUserName>
                    </S.CommentUserProfile>
                    <S.CommentIcon>
                      {props.userData?.fetchUserLoggedIn.email ===
                      props.el?.user.email ? (
                        <>
                          <FontAwesomeIcon
                            onClick={onClicktoUpdate}
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
                    </S.AnswerIcon>
                  </S.CommentDesc>
                </S.CommentDescBox>
              </S.QnaAnswerListArticle>
            </S.QnaAnswerListSection>
          </div>
        </S.QnaAnswerList>
      )}
      {isEdit && (
        <QnaAnswerWrite
          isEdit={true}
          setIsEdit={setIsEdit}
          qnaAnswerEl={props.el}
        />
      )}
    </>
  );
}
