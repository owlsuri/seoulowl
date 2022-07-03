import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../../commons/types/generated/types";
import BoardCommentReadUI from "./commentRead.presenter";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./commentRead.queries";

export default function BoardCommentRead() {
  const router = useRouter();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [boardCommentId, setBoardCommentId] = useState("");
  const [password, setPassword] = useState("");

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: String(router.query.boardId),
    },
  });

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoardComments)
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  const onClickOpenModal = (event: MouseEvent<HTMLOrSVGElement>) => {
    setIsOpenModal(true);
    if (event.currentTarget instanceof Element)
      setBoardCommentId(event.currentTarget.id);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(String(event.target.value));
  };

  const handleCancel = () => {
    setIsOpenModal(false);
  };

  const onClickDelete = async () => {
    try {
      await deleteBoardComment({
        variables: {
          boardCommentId,
          password,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setIsOpenModal(false);
      setBoardCommentId("");
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
        });
    }
  };

  return (
    <BoardCommentReadUI
      onLoadMore={onLoadMore}
      data={data}
      isOpenModal={isOpenModal}
      onClickOpenModal={onClickOpenModal}
      onChangePassword={onChangePassword}
      handleCancel={handleCancel}
      onClickDelete={onClickDelete}
    />
  );
}
