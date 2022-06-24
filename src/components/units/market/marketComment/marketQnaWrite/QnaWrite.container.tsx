import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
  IMutationUpdateUseditemQuestionArgs,
} from "../../../../../commons/types/generated/types";
import QnaWriteUI from "./QnaWrite.presenter";
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
  UPDATE_USEDITEM_QUESTION,
} from "./QnaWrite.queries";

export default function MarketQnaWrite(props) {
  const router = useRouter();

  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION);

  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USEDITEM_QUESTION);

  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: router.query.useditemId },
  });

  const { register, handleSubmit, setValue, reset, watch } = useForm({
    mode: "onChange",
  });

  const onClickAsk = async (data) => {
    try {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents: data.contents,
          },
          useditemId: String(router.query.useditemId),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
      Modal.success({
        content: "문의 등록이 완료되었습니다!",
      });
      reset();

      router.push(`/market/${router.query.useditemId}`);
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
        });
    }
  };

  const onClickUpdateQna = async (data) => {
    if (!data.contents) {
      Modal.error({ content: "수정된 내용이 없습니다." });
      return;
    }

    try {
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: {
            contents: data.contents,
          },
          useditemQuestionId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
      props.setIsEdit(false);
      Modal.success({
        content: "문의 수정이 완료되었습니다!",
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
        });
    }
  };

  return (
    <QnaWriteUI
      register={register}
      handleSubmit={handleSubmit}
      watch={watch}
      onClickAsk={onClickAsk}
      onClickUpdateQna={onClickUpdateQna}
      data={data}
      isEdit={props.isEdit}
      el={props.el}
    />
  );
}
