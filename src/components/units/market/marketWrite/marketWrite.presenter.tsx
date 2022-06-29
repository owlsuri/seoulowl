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

export default function MarketWriteUI(props: IMarketWriteProps) {
  useEffect(() => {
    props.reset({ contents: props.data?.fetchUseditem.contents });
  }, [props.data?.fetchUseditem.contents]);

  return (
    <>
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
          {props.isEdit ? "중고상품 수정하기" : "중고상품 등록하기"}
        </S.MarketWriteTitleSection>
        <S.MarketWriteSection>
          <form
            onSubmit={props.handleSubmit(
              props.isEdit ? props.onClickEdit : props.onClickSubmit
            )}
          >
            <S.MarketWriteInputArticle>
              <S.Label>상품명</S.Label>
              <S.Input
                type="text"
                placeholder="상품이름을 입력해주세요."
                {...props.register("name")}
                defaultValue={props.data?.fetchUseditem.name}
              />
              <S.Error>{props.formState.errors.name?.message}</S.Error>
            </S.MarketWriteInputArticle>
            <S.MarketWriteInputArticle>
              <S.Label>한줄요약</S.Label>
              <S.Input
                type="text"
                placeholder="상품을 한줄로 표현해주세요."
                {...props.register("remarks")}
                defaultValue={props.data?.fetchUseditem.remarks}
              />
              <S.Error>{props.formState.errors.remarks?.message}</S.Error>
            </S.MarketWriteInputArticle>
            <S.MarketWriteInputArticle>
              <S.Label>상품설명</S.Label>
              <S.RQuill
                placeholder="내용을 입력해주세요."
                onChange={props.onChangeContents}
                value={props.getValues("contents") || ""}
              />
              <S.Error>{props.formState.errors.contents?.message}</S.Error>
            </S.MarketWriteInputArticle>
            <S.MarketWriteInputArticle>
              <S.Label>상품가격</S.Label>
              <S.Input
                type="number"
                placeholder="가격을 숫자로 입력해주세요."
                {...props.register("price")}
                defaultValue={props.data?.fetchUseditem.price}
              />
              <S.Error>{props.formState.errors.price?.message}</S.Error>
            </S.MarketWriteInputArticle>
            <S.MarketWriteInputArticle>
              <S.Label>태그입력</S.Label>
              <S.Input
                type="text"
                placeholder="태그 입력 후 스페이스바를 눌러주세요."
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
                title="주소를 검색해주세요"
                visible={true}
                onOk={props.handleOk}
                onCancel={props.handleCancel}
              >
                <DaumPostcode onComplete={props.handleComplete} />
              </Modal>
            )}
            <S.MarketWriteInputArticle>
              <S.Label>거래위치</S.Label>
              <S.ZipcodeInput
                id="zipcode"
                placeholder="Click ➡➡"
                value={
                  props.zipcode ||
                  props.data?.fetchBoard?.boardAddress?.zipcode ||
                  ""
                }
                readOnly
              />
              <S.ZipcodeBtn type="button" onClick={props.showModal}>
                우편번호 검색
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
              <S.Label>사진</S.Label>
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
                {props.isEdit ? "수정하기" : "등록하기"}
              </S.SubmitBtn>
            </S.Submit>
          </form>
        </S.MarketWriteSection>
      </S.MarketWrite>
    </>
  );
}
