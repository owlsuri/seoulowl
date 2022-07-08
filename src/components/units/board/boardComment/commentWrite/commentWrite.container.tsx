import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  ICreateBoardCommentInput,
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
  };

  // 에러모달
  const onClickErrorModal = () => {
    setErrorAlertModal(false);
  };

  const { register, handleSubmit, reset, watch } = useForm({
    mode: "onChange",
  });

  const onChangeRating = (value: number) => {
    setRating(value);
  };

  const onClickComment = async (data: ICreateBoardCommentInput) => {
    try {
      await createBoardComment({
        variables: {
          boardId: String(router.query.boardId),
          createBoardCommentInput: {
            writer: data.writer,
            password: data.password,
            contents: data.contents,
            rating,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });

      setAlertModal(true);
      setModalContents("댓글 등록이 완료되었습니다!");
      setRating(0.5);
      reset();
    } catch (error) {
      setModalContents("입력되지 않은 항목이 있습니다.");
      setErrorAlertModal(true);
    }
  };

  const onClickCommentEdit = async (data: any) => {
    if (!data.contents) {
      setModalContents("수정한 내용이 없습니다!");
      setErrorAlertModal(true);
      return;
    }
    try {
      await updateBoardComment({
        variables: {
          boardCommentId: props.el?._id,
          password: data.password,
          updateBoardCommentInput: {
            contents: data.contents,
            rating,
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
      onChangeRating={onChangeRating}
      rating={rating}
      el={props.el}
      isCommentEdit={props.isCommentEdit}
      onClickComment={onClickComment}
      onClickCommentEdit={onClickCommentEdit}
      onClickRoutingModal={onClickRoutingModal}
      onClickErrorModal={onClickErrorModal}
      alertModal={alertModal}
      modalContents={modalContents}
      errorAlertModal={errorAlertModal}
      register={register}
      handleSubmit={handleSubmit}
      watch={watch}
    />
  );
}
