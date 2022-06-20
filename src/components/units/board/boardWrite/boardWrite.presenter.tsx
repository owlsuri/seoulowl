import { useEffect } from "react";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import * as S from "./boardWrite.styles";
import { v4 as uuidv4 } from "uuid";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import BasicModal from "../../../commons/modal/basic/basicModal";
import ErrorModal from "../../../commons/modal/error/errorModal";

export default function BoardWriteUI(props) {
  useEffect(() => {
    props.reset({ contents: props.data?.fetchProject.projectDetailIntro });
  }, [props.data?.fetchProject.projectDetailIntro]);

  return (
    <>
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
        <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
          <S.BoardWriteTitleArticle>수다글 작성하기</S.BoardWriteTitleArticle>
          <S.BoardWriteArticle>
            <S.WriterInfo>
              <div>
                <S.Label>작성자</S.Label>
                <S.WriterInfoInput
                  type="text"
                  placeholder="이름을 입력해주세요."
                  {...props.register("writer")}
                />
                <S.Error>{props.formState.errors.writer?.message}</S.Error>
              </div>
              <div>
                <S.Label>비밀번호</S.Label>
                <S.WriterInfoInput
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                  {...props.register("password")}
                />
                <S.Error>{props.formState.errors.password?.message}</S.Error>
              </div>
            </S.WriterInfo>
            <S.BoardContents>
              <S.Block>
                <S.Label>제목</S.Label>
                <S.ContentInput
                  type="text"
                  placeholder="제목을 입력해주세요."
                  {...props.register("title")}
                />
                <S.Error>{props.formState.errors.title?.message}</S.Error>
              </S.Block>
              <S.Block>
                <S.Label>내용</S.Label>
                <S.RQuill
                  placeholder="내용을 입력해주세요."
                  onChange={props.onChangeContents}
                  value={props.getValues("contents") || ""}
                />
                <S.Error>{props.formState.errors.contents?.message}</S.Error>
              </S.Block>
              <S.Block>
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
                <S.Label>장소</S.Label>
                <S.ZipcodeInput
                  id="zipcode"
                  placeholder="Click ➡➡"
                  value={props.zipcode}
                  readOnly
                />
                <S.ZipcodeBtn type="button" onClick={props.showModal}>
                  우편번호 검색
                </S.ZipcodeBtn>
                <S.ContentInput
                  id="address"
                  type="text"
                  value={props.address}
                  readOnly
                />
                <S.ContentInput
                  id="addressDetail"
                  type="text"
                  {...props.register("addressDetail")}
                />
              </S.Block>
              <S.Block>
                <S.Label>유투브</S.Label>
                <S.ContentInput
                  type="text"
                  placeholder="링크를 입력해주세요."
                  {...props.register("youtubeUrl")}
                />
              </S.Block>
              <S.Block>
                <S.Label>사진</S.Label>
                <S.ImgBox>
                  {props.fileUrls.map((el, index) => (
                    <Uploads01
                      type="button"
                      key={uuidv4()}
                      index={index}
                      fileUrl={el}
                      onChangeFileUrls={props.onChangeFileUrls}
                    />
                  ))}
                </S.ImgBox>
              </S.Block>
              <S.Submit>
                <S.SubmitBtn isActive={props.formState.isValid}>
                  등록하기
                </S.SubmitBtn>
              </S.Submit>
            </S.BoardContents>
          </S.BoardWriteArticle>
        </form>
      </S.BoardWriteSection>
    </>
  );
}
