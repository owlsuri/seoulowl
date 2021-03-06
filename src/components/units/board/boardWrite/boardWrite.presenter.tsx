/* eslint-disable array-callback-return */
import { useEffect } from "react";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import * as S from "./boardWrite.styles";
import { v4 as uuidv4 } from "uuid";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import BasicModal from "../../../commons/modal/basic/basicModal";
import ErrorModal from "../../../commons/modal/error/errorModal";
import { IBoardWriteProps } from "./boardWrite.types";
import Head from "next/head";

export default function BoardWriteUI(props: IBoardWriteProps) {
  useEffect(() => {
    props.reset({ contents: props.data?.fetchBoard.contents });
  }, [props.data?.fetchBoard.contents]);

  return (
    <>
      <Head>
        <title>{props.isEdit ? "π¬μλ€κΈ μμ " : "π¬μλ€κΈ μμ±"}</title>
      </Head>

      {props.alertModal && (
        <BasicModal
          onClickExit={props.onClickRoutingModal}
          contents={props.modalContents}
        />
      )}

      {props.errorAlertModal && (
        <ErrorModal
          onClickExit={props.onClickErrorModal}
          contents={props.modalContents}
        />
      )}
      <S.BoardWriteSection>
        <form
          onSubmit={props.handleSubmit(
            props.isEdit ? props.onClickEdit : props.onClickSubmit
          )}
        >
          <S.BoardWriteTitleArticle>
            {props.isEdit ? "μλ€κΈ μμ νκΈ°" : "μλ€κΈ μμ±νκΈ°"}
          </S.BoardWriteTitleArticle>
          <S.BoardWriteArticle>
            <S.WriterInfo>
              <div>
                <S.Label>μμ±μ</S.Label>
                <S.WriterInfoInput
                  type="text"
                  placeholder="μ΄λ¦μ μλ ₯ν΄μ£ΌμΈμ."
                  {...props.register("writer")}
                  defaultValue={props.data?.fetchBoard.writer}
                />
                <S.Error>{props.formState.errors.writer?.message}</S.Error>
              </div>
              <div>
                <S.Label>λΉλ°λ²νΈ</S.Label>
                <S.WriterInfoInput
                  type="password"
                  placeholder="λΉλ°λ²νΈλ₯Ό μλ ₯ν΄μ£ΌμΈμ."
                  {...props.register("password")}
                />
                <S.Error>{props.formState.errors.password?.message}</S.Error>
              </div>
            </S.WriterInfo>
            <S.BoardContents>
              <S.Block>
                <S.Label>μ λͺ©</S.Label>
                <S.ContentInput
                  type="text"
                  placeholder="μ λͺ©μ μλ ₯ν΄μ£ΌμΈμ."
                  {...props.register("title")}
                  defaultValue={props.data?.fetchBoard.title}
                />
                <S.Error>{props.formState.errors.title?.message}</S.Error>
              </S.Block>
              <S.Block>
                <S.Label>λ΄μ©</S.Label>
                <S.RQuill
                  placeholder="λ΄μ©μ μλ ₯ν΄μ£ΌμΈμ."
                  onChange={props.onChangeContents}
                  value={props.getValues("contents") || ""}
                />
                <S.Error>{props.formState.errors.contents?.message}</S.Error>
              </S.Block>
              <S.Block>
                {props.isOpen && (
                  <Modal
                    title="μ£Όμλ₯Ό κ²μν΄μ£ΌμΈμ"
                    visible={true}
                    onOk={props.handleOk}
                    onCancel={props.handleCancel}
                  >
                    <DaumPostcode onComplete={props.handleComplete} />
                  </Modal>
                )}
                <S.Label>μ₯μ</S.Label>
                <S.ZipcodeInput
                  id="zipcode"
                  placeholder="Click β‘β‘"
                  value={
                    props.zipcode ||
                    props.data?.fetchBoard?.boardAddress?.zipcode ||
                    ""
                  }
                  readOnly
                />
                <S.ZipcodeBtn type="button" onClick={props.showModal}>
                  μ°νΈλ²νΈ κ²μ
                </S.ZipcodeBtn>
                <S.ContentInput
                  id="address"
                  type="text"
                  defaultValue={
                    props.address ||
                    props.data?.fetchBoard?.boardAddress?.address ||
                    ""
                  }
                  readOnly
                />
                <S.ContentInput
                  id="addressDetail"
                  type="text"
                  {...props.register("addressDetail")}
                  defaultValue={
                    props.data?.fetchBoard.boardAddress.addressDetail
                  }
                />
              </S.Block>
              <S.Block>
                <S.Label>μ ν¬λΈ</S.Label>
                <S.ContentInput
                  type="text"
                  placeholder="λ§ν¬λ₯Ό μλ ₯ν΄μ£ΌμΈμ."
                  {...props.register("youtubeUrl")}
                  defaultValue={props.data?.fetchBoard.youtubeUrl}
                />
              </S.Block>
              <S.Block>
                <S.Label>μ¬μ§</S.Label>
                <S.ImgBox>
                  {props.fileUrls.map((el: any, index: number) => {
                    if (index !== 0 && props.fileUrls[index - 1] !== "")
                      return (
                        <S.UploadWrapper>
                          <Uploads01
                            type="button"
                            key={uuidv4()}
                            index={index}
                            fileUrl={el}
                            onChangeFileUrls={props.onChangeFileUrls}
                          />
                          <S.DeleteBtn
                            onClick={props.onClickImageDelete(index)}
                          >
                            x
                          </S.DeleteBtn>
                        </S.UploadWrapper>
                      );
                    if (index === 0)
                      return (
                        <S.UploadWrapper>
                          <Uploads01
                            type="button"
                            key={uuidv4()}
                            index={index}
                            fileUrl={el}
                            onChangeFileUrls={props.onChangeFileUrls}
                          />
                          <S.DeleteBtn
                            onClick={props.onClickImageDelete(index)}
                          >
                            x
                          </S.DeleteBtn>
                        </S.UploadWrapper>
                      );
                  })}
                </S.ImgBox>
              </S.Block>
              <S.Submit>
                <S.SubmitBtn
                  isActive={props.formState.isValid}
                  disabled={props.formState.isSubmitting}
                >
                  {props.isEdit ? "μμ νκΈ°" : "λ±λ‘νκΈ°"}
                </S.SubmitBtn>
              </S.Submit>
            </S.BoardContents>
          </S.BoardWriteArticle>
        </form>
      </S.BoardWriteSection>
    </>
  );
}
