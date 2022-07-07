![logo2](https://user-images.githubusercontent.com/98316357/176988550-3d00f611-32c6-4625-b3c4-6b8d1b384a54.png)

### 배포URL : https://owlsuri.shop

### 목차
1. 실행방법
2. 기술스택
3. 페이지 구성

## 실행방법
localhost:3000에서 yarn install => graphql endpoint graphql11을 graphql로 변경 => yarn dev

## 기술스택
<img width="748" alt="image" src="https://user-images.githubusercontent.com/98316357/177791989-f1e0ae64-8a00-4506-8c2f-8369cafee073.png">

## 페이지 구성
1. 랜딩 페이지

![ezgif com-gif-maker](https://user-images.githubusercontent.com/98316357/177793417-30de3adf-a397-445a-bd19-d29a9f831ab7.gif)
> 수다방과 중고마켓, 로그인 화면으로 이동할 수 있습니다.
- 각각 item을 hover한 후 `go`를 클릭하면 해당 페이지로 이동합니다.

2. 회원가입 페이지

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/98316357/177796784-ffc338d8-7127-42d9-aac4-c08b1b519c34.gif)
> 헤더의 메뉴를 통해 회원가입이 가능합니다.
- yup 적용으로 에러를 사전에 방지하였습니다. 
- 올바르지 못한 값을 입력한 경우에 회원가입 버튼이 활성화 되지 않습니다.

3. 로그인 & 로그아웃

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/98316357/177797847-57e084fb-06e1-4850-ac20-0ab99b02afbd.gif)
> 랜딩페이지의 메뉴와 헤더의 메뉴를 통해 로그인으로 이동이 가능합니다.
- yup을 적용해 올바르지 않은 값을 입력한 경우, 로그인 버튼이 활성화되지 않습니다.
- useApolloClient를 이용해 로그인한 회원의 이름을 담은 모달을 띄웁니다.

4. 수다방 리스트(자유게시판)

![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/98316357/177800080-79095927-71d1-4621-84c8-48f49108ef0d.gif)

> 수다방 리스트 페이지 입니다.
> 윗 부분의 글은 `좋아요` 순의 Best 게시글 입니다.
- 페이지네이션이 적용되어있어 리스트의 글을 확인할 수 있습니다.
- 제목으로 게시글을 검색할 수 있습니다. debouncing이 적용되어있어, 일정 시간 경과 후 확인할 수 있습니다.

5. 수다방(게시글 상세보기)

![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/98316357/177802023-3f0e96c9-14e2-44f2-8f6e-da6fbdeee2bb.gif)

> 수다방 게시글 상세보기 페이지입니다. 
> 비회원도 이용이 가능합니다. 
- react-player 적용으로 유튜브 영상이 재생 가능합니다.
- optimistic UI의 적용으로 좋아요 갯수를 추가 렌더링 없이 바로 확인할 수 있습니다.
- 댓글 기능이 있습니다.
- 툴팁으로 등록한 주소를 띄웁니다.

6. 수다방 댓글

![ezgif com-gif-maker (5)](https://user-images.githubusercontent.com/98316357/177805771-397f52c6-d001-4aea-8457-2ddcdb5a2d2a.gif)
> 댓글을 등록, 수정, 삭제할 수 있습니다.
> 비회원도 이용이 가능합니다.
- 댓글 수정, 삭제시 모달을 띄워 비밀번호를 입력받아 비밀번호가 일치할 경우에만 수정, 삭제가 가능합니다.
- 별점을 줄 수 있습니다.

7. 수다글 등록하기

![ezgif com-gif-maker (6)](https://user-images.githubusercontent.com/98316357/177808491-b2728d88-cee5-489b-8015-18f42e1c0ab6.gif)
> 비회원도 이용이 가능합니다.
> 익명으로 작성할 수 있습니다.
- yup을 적용해 필수값이 누락되지 않도록 했습니다.
- react-quill이 적용되어 있습니다.
- daum-post-code로 주소를 입력받습니다.

8. 수다글 수정 & 삭제

![ezgif com-gif-maker (7)](https://user-images.githubusercontent.com/98316357/177809957-20389d67-2413-456d-9111-6252e3054c57.gif)
> 작성할때 사용한 비밀번호와 일치할때 수정이 가능합니다.
- 게시글 등록하기와 공통 컴포넌트를 사용합니다.

9. 중고마켓 리스트

![ezgif com-gif-maker (8)](https://user-images.githubusercontent.com/98316357/177811631-6061ec62-81a2-4e8c-94e0-bd363720546c.gif)
> 중고마켓 게시글 리스트 입니다.
- 무한스크롤로 이전 게시글을 모두 보여줍니다.
- 상품명으로 검색이 가능합니다. debouncing이 적용되어 있습니다.
- 검색바 위의 게시글은 pick이 많은 순서로 정렬됩니다.
- 최근 본 상품 3개가 순서대로 오른쪽에 나타납니다.  
- 하트를 호버하면 pick한 숫자가 나타납니다.

10. 중고마켓 게시글 상세보기

![ezgif com-gif-maker (9)](https://user-images.githubusercontent.com/98316357/177813940-d9d15031-341d-42d6-9959-073cd510ba72.gif)
> 중고마켓 게시글 상세보기 입니다.
> 회원만 이용이 가능합니다. 권한 분기가 되어있습니다.
- kakao-map과 daum-post-code가 적용되어 있습니다.
- 로컬스토리지를 이용한 장바구니 담기 기능이 있으며, 중복으로 담기지 않습니다.
- pick(찜하기)기능이 있습니다(토글버튼).
- 결제하기 기능이 있습니다.
- Q&A부분을 분리했습니다.
- 작성자와 로그인한 유저가 다를 경우 수정, 삭제 버튼이 보이지 않습니다.
- 작성자가 본인의 상품을 구매할 수 없습니다.




