import MarketWriteUI from "./marketWrite.presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MouseEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_USED_ITEM,
  FETCH_USED_ITEM,
  UPDATE_USED_ITEM,
} from "./marketWrite.queries";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import { useAuth } from "../../../../commons/hooks/useAuth";

const schema = yup.object({
  name: yup
    .string()
    .max(30, "30자 이내로 입력해주세요.")
    .required("필수 입력 사항입니다."),
  remarks: yup
    .string()
    .max(50, "50자 이내로 입력해주세요")
    .required("필수 입력 사항입니다."),
  contents: yup
    .string()
    .max(1000, "1000자 이내로 입력해주세요")
    .required("필수 입력 사항입니다."),
  price: yup.string().required("숫자만 입력해주세요."),
});

const editSchema = yup.object({
  name: yup
    .string()
    .max(30, "30자 이내로 입력해주세요.")
    .required("필수 입력 사항입니다."),
  remarks: yup
    .string()
    .max(50, "50자 이내로 입력해주세요")
    .required("필수 입력 사항입니다."),
  contents: yup
    .string()
    .max(1000, "1000자 이내로 입력해주세요")
    .required("필수 입력 사항입니다."),
  price: yup.string().required("숫자만 입력해주세요."),
});

export default function MarketWrite(props) {
  useAuth();

  const router = useRouter();

  const [fileUrls, setFileUrls] = useState(["", "", "", ""]);
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [hashArr, setHashArr] = useState([]);

  const [useditemId, setUseditemId] = useState("");

  const [alertModal, setAlertModal] = useState(false);
  const [modalContents, setModalContents] = useState("");
  const [errorAlertModal, setErrorAlertModal] = useState(false);

  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.useditemId) },
  });

  const onClickUpdatedModal = () => {
    router.push(`/market/${router.query.useditemId}`);
    setAlertModal(false);
  };
  // 이동모달
  const onClickRoutingModal = () => {
    router.push(`/market/${useditemId}`);
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
    reset,
    getValues,
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

  const onKeyUpHash = (event) => {
    if (event.keyCode === 32 && event.target.value !== " ") {
      setHashArr([...hashArr, "#" + event.target.value]);

      event.target.value = "";
    }
    console.log(event.target.value);
  };

  const onClickDeleteHash = (event: any) => {
    hashArr.splice(Number(event.target.id), 1);
    setHashArr([...hashArr]);
  };

  const onClickSubmit = async (data) => {
    try {
      const createUseditemResult = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: hashArr,
            images: fileUrls,
            useditemAddress: {
              zipcode,
              address,
              addressDetail: data.addressDetail,
            },
          },
        },
      });
      setAlertModal(true);
      setModalContents("중고상품 등록이 완료되었습니다!");
      setUseditemId(createUseditemResult.data.createUseditem._id);
    } catch (error) {
      setModalContents(error.message);
      setErrorAlertModal(true);
    }
  };

  const onClickEdit = (data) => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(data?.fetchUseditem?.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    if (
      !data.name &&
      !data.remarks &&
      !data.contents &&
      !data.price &&
      !isChangedFiles
    ) {
      setModalContents("수정한 내용이 없습니다.");
      setErrorAlertModal(true);
    }
    try {
      updateUseditem({
        variables: {
          useditemId: String(router.query.useditemId),
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: hashArr,
            images: fileUrls,
            useditemAddress: {
              zipcode,
              address,
              addressDetail: data.addressDetail,
            },
          },
        },
      });
      setAlertModal(true);
      setModalContents("중고상품 수정이 완료되었습니다!");
    } catch (error) {
      setModalContents(error.message);
      setErrorAlertModal(true);
    }
  };

  useEffect(() => {
    if (data?.fetchUseditem.images?.length) {
      setFileUrls([...data?.fetchUseditem.images]);
    }
    setZipcode(data?.fetchUseditem?.useditemAddress.zipcode);
    setAddress(data?.fetchUseditem?.useditemAddress.address);
    if (data?.fetchUseditem.tags?.length) {
      setHashArr([...data?.fetchUseditem.tags]);
    }
  }, [data]);

  return (
    <MarketWriteUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      getValues={getValues}
      reset={reset}
      onChangeContents={onChangeContents}
      onChangeFileUrls={onChangeFileUrls}
      onClickImageDelete={onClickImageDelete}
      fileUrls={fileUrls}
      hashArr={hashArr}
      onKeyUpHash={onKeyUpHash}
      onClickDeleteHash={onClickDeleteHash}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      handleComplete={handleComplete}
      isOpen={isOpen}
      zipcode={zipcode}
      address={address}
      onClickRoutingModal={onClickRoutingModal}
      onClickUpdatedModal={onClickUpdatedModal}
      onClickErrorModal={onClickErrorModal}
      alertModal={alertModal}
      modalContents={modalContents}
      errorAlertModal={errorAlertModal}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      isEdit={props.isEdit}
      data={data}
    />
  );
}
