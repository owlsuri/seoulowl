// 검색 컨테이너
import _ from "lodash";
import { ChangeEvent } from "react";
import Searchbars02UI from "./searchBars02.presenter";

export default function SearchBars02(props) {
  const getDebounce = _.debounce((data: any) => {
    props.refetch({ search: data, page: 1 });
    props.onChangeKeyword(data);
  }, 400);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  return <Searchbars02UI onChangeSearch={onChangeSearch} />;
}
