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
