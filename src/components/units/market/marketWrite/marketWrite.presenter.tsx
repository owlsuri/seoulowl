/* eslint-disable array-callback-return */
import KakaoMapPage from "../../../commons/kakaomap/kakaomap";
import { v4 as uuidv4 } from "uuid";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import * as S from "./marketWrite.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import BasicModal from "../../../commons/modal/basic/basicModal";
import ErrorModal from "../../../commons/modal/error/errorModal";
import { useEffect } from "react";
import { IMarketWriteProps } from "./marketWrite.types";
import Head from "next/head";

export default function MarketWriteUI(props: IMarketWriteProps) {
  useEffect(() => {
    props.reset({ contents: props.data?.fetchUseditem.contents });
  }, [props.data?.fetchUseditem.contents]);

  return (
    <>
      <Head>
        <title>{props.isEdit ? "πμ€κ³ μν μμ " : "πμ€κ³ μν λ±λ‘"}</title>
      </Head>
      {props.alertModal && (
        <BasicModal
          onClickExit={
            props.isEdit ? props.onClickUpdatedModal : props.onClickRoutingModal
          }
          contents={props.modalContents}
        />
      )}

      {props.errorAlertModal && (
        <ErrorModal
          onClickExit={props.onClickErrorModal}
          contents={props.modalContents}
        />
      )}
      <S.MarketWrite>
        <S.MarketWriteTitleSection>
          {props.isEdit ? "μ€κ³ μν μμ νκΈ°" : "μ€κ³ μν λ±λ‘νκΈ°"}
        </S.MarketWriteTitleSection>
        <S.MarketWriteSection>
          <form
            onSubmit={props.handleSubmit(
              props.isEdit ? props.onClickEdit : props.onClickSubmit
            )}
          >
            <S.MarketWriteInputArticle>
              <S.Label>μνλͺ</S.Label>
              <S.Input
                type="text"
                placeholder="μνμ΄λ¦μ μλ ₯ν΄μ£ΌμΈμ."
                {...props.register("name")}
                defaultValue={props.data?.fetchUseditem.name}
              />
              <S.Error>{props.formState.errors.name?.message}</S.Error>
            </S.MarketWriteInputArticle>
            <S.MarketWriteInputArticle>
              <S.Label>νμ€μμ½</S.Label>
              <S.Input
                type="text"
                placeholder="μνμ νμ€λ‘ ννν΄μ£ΌμΈμ."
                {...props.register("remarks")}
                defaultValue={props.data?.fetchUseditem.remarks}
              />
              <S.Error>{props.formState.errors.remarks?.message}</S.Error>
            </S.MarketWriteInputArticle>
            <S.MarketWriteInputArticle>
              <S.Label>μνμ€λͺ</S.Label>
              <S.RQuill
                placeholder="λ΄μ©μ μλ ₯ν΄μ£ΌμΈμ."
                onChange={props.onChangeContents}
                value={props.getValues("contents") || ""}
              />
              <S.Error>{props.formState.errors.contents?.message}</S.Error>
            </S.MarketWriteInputArticle>
            <S.MarketWriteInputArticle>
              <S.Label>μνκ°κ²©</S.Label>
              <S.Input
                type="number"
                placeholder="κ°κ²©μ μ«μλ‘ μλ ₯ν΄μ£ΌμΈμ."
                {...props.register("price")}
                defaultValue={props.data?.fetchUseditem.price}
              />
              <S.Error>{props.formState.errors.price?.message}</S.Error>
            </S.MarketWriteInputArticle>
            <S.MarketWriteInputArticle>
              <S.Label>νκ·Έμλ ₯</S.Label>
              <S.Input
                type="text"
                placeholder="νκ·Έ μλ ₯ ν μ€νμ΄μ€λ°λ₯Ό λλ¬μ£ΌμΈμ."
                {...props.register("tags")}
                onKeyUp={props.onKeyUpHash}
              />
              <S.Tags>
                {props.hashArr.map((el: any, idx: any) => (
                  <>
                    <S.TagPreview key={idx}>
                      {el}
                      <FontAwesomeIcon
                        type="button"
                        id={idx}
                        onClick={props.onClickDeleteHash}
                        icon={faX}
                        color="#BDBDBD"
                        cursor="pointer"
                      />
                    </S.TagPreview>
                  </>
                ))}
              </S.Tags>
            </S.MarketWriteInputArticle>
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
            <S.MarketWriteInputArticle>
              <S.Label>κ±°λμ₯μ</S.Label>
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
              <S.Input
                id="address"
                type="text"
                value={
                  props.address ||
                  props.data?.fetchUseditem.useditemAddress.address
                }
                readOnly
              />
              <S.Input
                id="addressDetail"
                type="text"
                {...props.register("addressDetail")}
                defaultValue={
                  props.data?.fetchUseditem.useditemAddress.addressDetail
                }
              />
              <S.MapBox>
                <KakaoMapPage address={props.address} />
              </S.MapBox>
            </S.MarketWriteInputArticle>
            <S.MarketWriteInputArticle>
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
                        <S.DeleteBtn onClick={props.onClickImageDelete(index)}>
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
                        <S.DeleteBtn onClick={props.onClickImageDelete(index)}>
                          x
                        </S.DeleteBtn>
                      </S.UploadWrapper>
                    );
                })}
              </S.ImgBox>
            </S.MarketWriteInputArticle>
            <S.Submit>
              <S.SubmitBtn
                isActive={props.formState.isValid}
                disabled={props.formState.isSubmitting}
              >
                {props.isEdit ? "μμ νκΈ°" : "λ±λ‘νκΈ°"}
              </S.SubmitBtn>
            </S.Submit>
          </form>
        </S.MarketWriteSection>
      </S.MarketWrite>
    </>
  );
}
