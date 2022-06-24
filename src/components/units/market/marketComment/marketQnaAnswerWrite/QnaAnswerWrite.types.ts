import { ChangeEvent } from "react";

export interface IMarketQnaAnswerWriteProps {
  contents: string;
  OnChangeAnswer: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickAnswer: () => void;
  isEdit: boolean;
  el: any;
  onClickUpdate: () => void;
  qnaAnswerEl: any;
}
