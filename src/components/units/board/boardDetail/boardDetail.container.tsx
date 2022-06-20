import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import BoardDetailUI from "./boardDetail.presenter";
import {
  DELETE_BOARD,
  DISLIKE_BOARD,
  FETCH_BOARD,
  LIKE_BOARD,
} from "./boardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) },
    }
  );
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

  const onClickLike = async () => {
    try {
      await likeBoard({
        variables: { boardId: String(router.query.boardId) },
        optimisticResponse: {
          likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
        },
        update(cache, { data }) {
          cache.writeQuery({
            query: FETCH_BOARD,
            variables: { boardId: String(router.query.boardId) },
            data: {
              fetchBoard: {
                _id: String(router.query.boardId),
                __typename: "Board",
                likeCount: data?.likeBoard,
              },
            },
          });
        },
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickDisLike = async () => {
    try {
      await dislikeBoard({
        variables: { boardId: String(router.query.boardId) },
        optimisticResponse: {
          dislikeBoard: (data?.fetchBoard.dislikeCount || 0) + 1,
        },
        update(cache, { data }) {
          cache.writeQuery({
            query: FETCH_BOARD,
            variables: { boardId: String(router.query.boardId) },
            data: {
              fetchBoard: {
                _id: String(router.query.boardId),
                __typename: "Board",
                dislikeCount: data?.dislikeBoard,
              },
            },
          });
        },
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickToEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickDelete = async () => {
    try {
      await deleteBoard({
        variables: { boardId: String(router.query.boardId) },
      });
      alert("성공");
      router.push("/board");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <BoardDetailUI
      data={data}
      onClickLike={onClickLike}
      onClickDisLike={onClickDisLike}
      onClickToEdit={onClickToEdit}
      onClickDelete={onClickDelete}
    />
  );
}
