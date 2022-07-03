import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_USER_LOGGED_IN } from "../../../login/login.queries";

import MarketQnAListUI from "./QnaList.presenter";
import {
  FETCH_USEDITEM_QUESTIONS,
  DELETE_USEDITEM_QUESTION,
} from "./QnaList.queries";

export default function MarketQnAList() {
  const router = useRouter();

  const { data: userInfo } = useQuery(FETCH_USER_LOGGED_IN);

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: String(router.query.useditemId) },
  });

  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USEDITEM_QUESTION);

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestions)
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  const onClickDelete = async (
    event: MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: String(event.currentTarget.id),
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: String(router.query.useditemId) },
          },
        ],
      });

      Modal.success({
        content: "댓글 삭제가 완료되었습니다!",
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
        });
    }
  };

  return (
    <MarketQnAListUI
      data={data}
      userInfo={userInfo}
      onLoadMore={onLoadMore}
      onClickDelete={onClickDelete}
    />
  );
}
