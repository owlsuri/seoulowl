import { ChangeEvent } from "react";

export interface ISearchBarProps {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
