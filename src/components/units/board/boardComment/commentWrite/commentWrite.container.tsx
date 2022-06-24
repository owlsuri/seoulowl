import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";

import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_BOARD_COMMENTS } from "../commentRead/commentRead.queries";
import BoardCommentWriteUI from "./commentWrite.presenter";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./commentWrite.queries";

export default function BoardCommentWrite(props: any) {
  const router = useRouter();

  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    contents: "",
  });

  const [rating, setRating] = useState(0);

  const [alertModal, setAlertModal] = useState(false);
  const [modalContents, setModalContents] = useState("");
  const [errorAlertModal, setErrorAlertModal] = useState(false);

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  // 이동모달
  const onClickRoutingModal = () => {
    setAlertModal(false);
    location.reload();
  };

  // 에러모달
  const onClickErrorModal = () => {
    setErrorAlertModal(false);
  };

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  const onChangeRating = (value: number) => {
    setRating(value);
  };

  const onClickComment = async () => {
    try {
      await createBoardComment({
        variables: {
          boardId: String(router.query.boardId),
          createBoardCommentInput: {
            writer: inputs.writer,
            password: inputs.password,
            contents: inputs.contents,
            rating,
          },
        },
      });

      setAlertModal(true);
      setModalContents("댓글 등록이 완료되었습니다!");
    } catch (error) {
      setModalContents(error.message);
      setErrorAlertModal(true);
    }
  };

  const onClickCommentEdit = async () => {
    if (!inputs.contents) {
      setModalContents("수정한 내용이 없습니다!");
      setErrorAlertModal(true);
      return;
    }
    try {
      await updateBoardComment({
        variables: {
          boardCommentId: props.el?._id,
          password: inputs.password,
          updateBoardCommentInput: {
            contents: inputs.contents,
            rating: rating,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      Modal.success({
        content: "댓글 수정이 완료되었습니다!",
      });
      props.setIsCommentEdit(false);
    } catch (error) {
      setModalContents(error.message);
      setErrorAlertModal(true);
    }
  };

  useEffect(() => {
    setRating(props.el?.rating);
  }, [props.el]);

  return (
    <BoardCommentWriteUI
      onChangeInputs={onChangeInputs}
      onChangeRating={onChangeRating}
      rating={rating}
      inputs={inputs}
      el={props.el}
      isCommentEdit={props.isCommentEdit}
      onClickComment={onClickComment}
      onClickCommentEdit={onClickCommentEdit}
      onClickRoutingModal={onClickRoutingModal}
      onClickErrorModal={onClickErrorModal}
      alertModal={alertModal}
      modalContents={modalContents}
      errorAlertModal={errorAlertModal}
    />
  );
}
