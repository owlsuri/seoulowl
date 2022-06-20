import BoardWriteUI from "./boardWrite.presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "./boardWrite.queries";
import {
  ICreateBoardInput,
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";

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

export default function BoardWrite(props) {
  const router = useRouter();
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [alertModal, setAlertModal] = useState(false);
  const [modalContents, setModalContents] = useState("");
  const [errorAlertModal, setErrorAlertModal] = useState(false);

  const [boardId, setBoardId] = useState("");

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

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
    />
  );
}
