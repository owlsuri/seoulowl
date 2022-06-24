import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import {
  IMutation,
  IMutationDeleteUseditemQuestionAnswerArgs,
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../../commons/types/generated/types";

import QnaAnswerListUI from "./QnaAnswerList.presenter";
import {
  DELETE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTION_ANSWERS,
  FETCH_USER_LOGGED_IN,
} from "./QnaAnswerList.queries";

export default function QnaAnswerList(props: any) {
  const { data: qadata, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USEDITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: String(props.el._id) },
  });

  const [deleteUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "deleteUseditemQuestionAnswer">,
    IMutationDeleteUseditemQuestionAnswerArgs
  >(DELETE_USEDITEM_QUESTION_ANSWER);

  const { data: userData } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const onClickDelete = async (
    event: MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: event.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: props.el._id,
            },
          },
        ],
      });
      Modal.success({
        content: "삭제가 완료되었습니다!",
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
        });
    }
  };

  const loadMore = () => {
    if (!qadata) return;

    fetchMore({
      variables: {
        page: Math.ceil(qadata.fetchUseditemQuestionAnswers.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestionAnswers)
          return {
            fetchUseditemQuestionAnswers: [
              ...prev.fetchUseditemQuestionAnswers,
            ],
          };
        return {
          fetchUseditemQuestionAnswers: [
            ...prev.fetchUseditemQuestionAnswers,
            ...fetchMoreResult.fetchUseditemQuestionAnswers,
          ],
        };
      },
    });
  };

  return (
    <QnaAnswerListUI
      qadata={qadata}
      data={props.data}
      loadMore={loadMore}
      qael={props.el}
      onClickDelete={onClickDelete}
      userData={userData}
    />
  );
}
