import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
} from "../../../../commons/types/generated/types";
import BoardDetailUI from "./boardDetail.presenter";
import { DELETE_BOARD, DISLIKE_BOARD, LIKE_BOARD } from "./boardDetail.queries";

export default function BoardDetail(props: any) {
  const router = useRouter();

  const [alertModal, setAlertModal] = useState(false);
  const [modalContents, setModalContents] = useState("");
  const [errorAlertModal, setErrorAlertModal] = useState(false);

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  // 이동모달
  const onClickRoutingModal = () => {
    router.push("/board");
    setAlertModal(false);
  };

  // 에러모달
  const onClickErrorModal = () => {
    setErrorAlertModal(false);
  };

  const onClickLike = async () => {
    try {
      await likeBoard({
        variables: { boardId: String(router.query.boardId) },
        // optimisticResponse: {
        //   likeBoard: (props.data?.likeCount || 0) + 1,
        // },
        // update(cache, { data }) {
        //   cache.writeQuery({
        //     query: FETCH_BOARD,
        //     variables: { boardId: String(router.query.boardId) },
        //     data: {
        //       fetchBoard: {
        //         _id: String(router.query.boardId),
        //         __typename: "Board",
        //         likeCount: data?.likeBoard,
        //       },
        //     },
        //   });
        // },
      });
      router.replace(`/board/${router.query.boardId}`);
    } catch (error) {
      setModalContents(error.message);
      setErrorAlertModal(true);
    }
  };

  const onClickDisLike = async () => {
    try {
      await dislikeBoard({
        variables: { boardId: String(router.query.boardId) },
        // optimisticResponse: {
        //   dislikeBoard: (props.data?.dislikeCount || 0) + 1,
        // },
        // update(cache, { data }) {
        //   cache.writeQuery({
        //     query: FETCH_BOARD,
        //     variables: { boardId: String(router.query.boardId) },
        //     data: {
        //       fetchBoard: {
        //         _id: String(router.query.boardId),
        //         __typename: "Board",
        //         dislikeCount: data?.dislikeBoard,
        //       },
        //     },
        //   });
        // },
      });
      router.replace(`/board/${router.query.boardId}`);
    } catch (error) {
      setModalContents(error.message);
      setErrorAlertModal(true);
    }
  };

  const onClickToEdit = () => {
    router.push(`/board/${router.query.boardId}/edit`);
  };

  const onClickDelete = async () => {
    try {
      await deleteBoard({
        variables: { boardId: String(router.query.boardId) },
      });

      setAlertModal(true);
      setModalContents("삭제되었습니다!");
    } catch (error) {
      setModalContents(error.message);
      setErrorAlertModal(true);
    }
  };
  return (
    <BoardDetailUI
      data={props.data}
      onClickLike={onClickLike}
      onClickDisLike={onClickDisLike}
      onClickToEdit={onClickToEdit}
      onClickDelete={onClickDelete}
      onClickRoutingModal={onClickRoutingModal}
      onClickErrorModal={onClickErrorModal}
      alertModal={alertModal}
      modalContents={modalContents}
      errorAlertModal={errorAlertModal}
    />
  );
}
