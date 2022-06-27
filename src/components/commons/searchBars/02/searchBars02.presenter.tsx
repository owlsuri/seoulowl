// 검색 프레젠터
import * as S from "../01/searchBars01.styles";
import { ISearchBarProps } from "../01/searchBars01.types";

export default function Searchbars02UI(props: ISearchBarProps) {
  return (
    <S.Search>
      <S.SearchBox
        type="text"
        onChange={props.onChangeSearch}
        placeholder="상품을 검색해주세요."
      />
    </S.Search>
  );
}
