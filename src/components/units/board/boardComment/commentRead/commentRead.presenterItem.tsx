import { getDate } from "../../../../../commons/libraries/getDate";
import { Rate, Modal } from "antd";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faX } from "@fortawesome/free-solid-svg-icons";
import * as S from "./commentRead.styles";
import { useState } from "react";
import BoardCommentWrite from "../commentWrite/commentWrite.container";
import { IBoardCommentReadProps } from "./commentRead.types";

export default function BoardCommentReadItemUI(props: IBoardCommentReadProps) {
  const [isCommentEdit, setIsCommentEdit] = useState(false);

  const onClickToEdit = () => {
    setIsCommentEdit(true);
  };

  return (
    <>
      {props.isOpenModal && (
        <Modal
          visible={true}
          onOk={props.onClickDelete}
          onCancel={props.handleCancel}
        >
          <S.ModalSection>
            <S.ModalImg src="/images/logo2.png" />
            <S.ModalContents>비밀번호를 입력해주세요. </S.ModalContents>
            <S.PasswordInput
              type="password"
              onChange={props.onChangePassword}
            />
          </S.ModalSection>
        </Modal>
      )}
      {!isCommentEdit && (
        <S.BoardComment key={props.el?._id} id={props.el?.writer}>
          <S.BoardCommentSection>
            <S.CommentUserImg>
              <AccountCircleIcon fontSize="large" color="disabled" />
            </S.CommentUserImg>
            <S.BoardCommentArticle>
              <S.CommentUserInfo>
                <S.CommentUserProfile>
                  <S.CommentUserName>{props.el?.writer}</S.CommentUserName>
                  <S.CommentStar>
                    <Rate value={props.el?.rating} disabled></Rate>
                  </S.CommentStar>
                </S.CommentUserProfile>
                <S.CommentIcon>
                  <FontAwesomeIcon
                    onClick={onClickToEdit}
                    icon={faPencil}
                    color="#BDBDBD"
                    cursor="pointer"
                  />
                  <FontAwesomeIcon
                    id={props.el._id}
                    onClick={props.onClickOpenModal}
                    icon={faX}
                    color="#BDBDBD"
                    cursor="pointer"
                  />
                </S.CommentIcon>
              </S.CommentUserInfo>
              <S.CommentDesc>
                <S.Comment>{props.el?.contents}</S.Comment>
                <S.CommentDate>{getDate(props.el?.createdAt)}</S.CommentDate>
              </S.CommentDesc>
            </S.BoardCommentArticle>
          </S.BoardCommentSection>
        </S.BoardComment>
      )}
      {isCommentEdit && (
        <BoardCommentWrite
          isCommentEdit={true}
          setIsCommentEdit={setIsCommentEdit}
          el={props.el}
        />
      )}
    </>
  );
}
