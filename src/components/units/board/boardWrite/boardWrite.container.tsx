import BoardWriteUI from "./boardWrite.presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./boardWrite.queries";
import {
  ICreateBoardInput,
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
  IUpdateBoardInput,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { FETCH_BOARD } from "../boardDetail/boardDetail.queries";

const schema = yup.object({
  writer: yup
    .string()
    .max(25, "작성자는 25자리이내로 입력해주세요.")
    .required("필수 입력 사항입니다."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해주세요.")
    .max(15, "비밀번호는 최대 15자리 입니다.")
    .required("비밀번호는 필수 입력 사항 입니다."),
  title: yup
    .string()
    .max(100, "제목은 최대 100자 까지만 입력 할 수 있습니다.")
    .required("필수 입력 사항입니다."),
  contents: yup.string().required("필수 입력 사항입니다."),
  addressDetail: yup.string(),
  youtubeUrl: yup.string(),
});

const editSchema = yup.object({
  title: yup.string(),
  contents: yup.string(),
  addressDetail: yup.string(),
  youtubeUrl: yup.string(),
});

export default function BoardWrite(props: any) {
  const router = useRouter();

  const [fileUrls, setFileUrls] = useState(["", "", "", ""]);
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [alertModal, setAlertModal] = useState(false);
  const [modalContents, setModalContents] = useState("");
  const [errorAlertModal, setErrorAlertModal] = useState(false);

  const [boardId, setBoardId] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) },
    }
  );

  const [updateBoard] = useMutation(UPDATE_BOARD);

  // 이동모달
  const onClickRoutingModal = () => {
    router.push(`/board/${boardId}`);
    setAlertModal(false);
  };

  // 에러모달
  const onClickErrorModal = () => {
    setErrorAlertModal(false);
  };

  const {
    register,
    handleSubmit,
    formState,
    setValue,
    trigger,
    getValues,
    reset,
  } = useForm({
    resolver: yupResolver(props.isEdit ? editSchema : schema),
    mode: "onChange",
  });

  const onChangeContents = (value: any) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleComplete = (data: any) => {
    setIsOpen(false);
    setAddress(data.address);
    setZipcode(data.zonecode);
  };
  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const onClickImageDelete = (index: number) => () => {
    const newFileUrls = [...fileUrls];
    newFileUrls.splice(index, 1);
    setFileUrls(newFileUrls);
  };

  // 등록하기
  const onClickSubmit = async (data: ICreateBoardInput) => {
    try {
      const createBoardResult = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
            images: fileUrls,
            youtubeUrl: data.youtubeUrl,
            boardAddress: {
              zipcode,
              address,
              addressDetail: data.addressDetail,
            },
          },
        },
      });
      setAlertModal(true);
      setModalContents("수다글 등록이 완료되었습니다!");
      setBoardId(createBoardResult.data.createBoard._id);
    } catch (error) {
      setModalContents(error.message);
      setErrorAlertModal(true);
    }
  };

  const onClickEdit = async (data: IUpdateBoardInput) => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(data.fetchBoard?.images);
    const isChangedFiles = currentFiles !== defaultFiles;
    if (
      !data.title &&
      !data.contents &&
      !data.youtubeUrl &&
      !address &&
      !data.addressDetail &&
      !isChangedFiles
    ) {
      setModalContents("수정한 내용이 없습니다.");
      setErrorAlertModal(true);
    }
    try {
      const updateBoardResult = await updateBoard({
        variables: {
          boardId: String(router.query.boardId),
          password: data.password,
          updateBoardInput: {
            title: data.title,
            contents: data.contents,
            images: fileUrls,
            youtubeUrl: data.youtubeUrl,
            boardAddress: {
              zipcode,
              address,
              addressDetail: data.addressDetail,
            },
          },
        },
      });
      setAlertModal(true);
      setModalContents("수다글 수정이 완료되었습니다!");
      setBoardId(updateBoardResult.data.updateBoard._id);
    } catch (error) {
      setModalContents(error.message);
      setErrorAlertModal(true);
    }
  };

  useEffect(() => {
    if (data?.fetchBoard.images?.length) {
      setFileUrls([...data?.fetchBoard.images]);
    }
    setZipcode(data?.fetchBoard?.boardAddress.zipcode);
    setAddress(data?.fetchBoard?.boardAddress.address);
  }, [data]);

  return (
    <BoardWriteUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      getValues={getValues}
      reset={reset}
      onClickSubmit={onClickSubmit}
      onChangeContents={onChangeContents}
      onChangeFileUrls={onChangeFileUrls}
      onClickImageDelete={onClickImageDelete}
      fileUrls={fileUrls}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      handleComplete={handleComplete}
      isOpen={isOpen}
      zipcode={zipcode}
      address={address}
      onClickRoutingModal={onClickRoutingModal}
      onClickErrorModal={onClickErrorModal}
      alertModal={alertModal}
      modalContents={modalContents}
      errorAlertModal={errorAlertModal}
      isEdit={props.isEdit}
      onClickEdit={onClickEdit}
      data={data}
    />
  );
}
