import * as S from "./boardWrite.styles";

export default function BoardWriteUI() {
  return (
    <S.BoardWriteSection>
      <S.BoardWriteTitleArticle>수다글 작성하기</S.BoardWriteTitleArticle>
      <S.BoardWriteArticle>
        <S.WriterInfo>
          <div>
            <S.Label>작성자</S.Label>
            <S.WriterInfoInput type="text" placeholder="이름을 입력해주세요." />
          </div>
          <div>
            <S.Label>비밀번호</S.Label>
            <S.WriterInfoInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
            />
          </div>
        </S.WriterInfo>
        <S.BoardContents>
          <S.Block>
            <S.Label>제목</S.Label>
            <S.ContentInput type="text" placeholder="제목을 입력해주세요." />
          </S.Block>
          <S.Block>
            <S.Label>내용</S.Label>
            <S.RQuill placeholder="내용을 입력해주세요." />
          </S.Block>
          <S.Block>
            <S.Label>장소</S.Label>
            <S.ZipcodeInput placeholder="Click ➡➡" />
            <S.ZipcodeBtn>우편번호 검색</S.ZipcodeBtn>
            <S.ContentInput type="text" />
            <S.ContentInput type="text" />
          </S.Block>
          <S.Block>
            <S.Label>유투브</S.Label>
            <S.ContentInput type="text" placeholder="링크를 입력해주세요." />
          </S.Block>
          <S.Submit>
            <S.SubmitBtn>등록하기</S.SubmitBtn>
          </S.Submit>
        </S.BoardContents>
      </S.BoardWriteArticle>
    </S.BoardWriteSection>
  );
}
