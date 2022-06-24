import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
  IMutationUpdateUseditemQuestionAnswerArgs,
} from "../../../../../commons/types/generated/types";

import QnaAnswerWriteUI from "./QnaAnswerWrite.presenter";
import {
  CREATE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTION_ANSWERS,
  UPDATE_USEDITEM_QUESTION_ANSWER,
} from "./QnaAnswerWrite.queris";

export default function QnaAnswerWrite(props) {
  const [createUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USEDITEM_QUESTION_ANSWER);

  const [updateUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "updateUseditemQuestionAnswer">,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPDATE_USEDITEM_QUESTION_ANSWER);

  const [qnaAnswer, setQnaAnswer] = useState("");

  const OnChangeAnswer = (event: ChangeEvent<HTMLInputElement>) => {
    setQnaAnswer(event.target.value);
  };

  const onClickAnswer = async () => {
    props.setIsAnswer(false);
    try {
      const result = await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents: qnaAnswer,
          },
          useditemQuestionId: String(props.el._id),
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: String(props.el._id) },
          },
        ],
      });
      setQnaAnswer("");
      Modal.success({
        content: "답글 등록이 완료되었습니다!",
      });
      props.setIsAnswer(false);
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
        });
    }
  };

  const onClickUpdate = async () => {
    if (!qnaAnswer) {
      Modal.error({ content: "수정된 내용이 없습니다." });
      return;
    }

    try {
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: {
            contents: qnaAnswer,
          },
          useditemQuestionAnswerId: String(props.qnaAnswerEl._id),
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: String(props.qnaAnswerEl._id) },
          },
        ],
      });
      Modal.success({
        content: "수정이 완료되었습니다!",
      });
      props.setIsEdit(false);
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
        });
    }
  };

  return (
    <QnaAnswerWriteUI
      qnaAnswer={qnaAnswer}
      OnChangeAnswer={OnChangeAnswer}
      onClickAnswer={onClickAnswer}
      isEdit={props.isEdit}
      el={props.el}
      onClickUpdate={onClickUpdate}
      qnaAnswerEl={props.qnaAnswerEl}
    />
  );
}
