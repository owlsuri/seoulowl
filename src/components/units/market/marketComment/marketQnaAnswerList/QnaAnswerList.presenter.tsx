import QnaAnswerListItem from "./QnaAnswerList.presenterItem";
import InfiniteScroll from "react-infinite-scroller";

export default function QnaAnswerListUI(props) {
  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={props.loadMore} hasMore={true}>
        {props.qadata?.fetchUseditemQuestionAnswers.map((el: any) => (
          <QnaAnswerListItem
            key={String(el?._id)}
            el={el}
            data={props.data}
            onClickDelete={props.onClickDelete}
            qael={props.qael}
            userData={props.userData}
            setUseditemQuestionId={props.setUseditemQuestionId}
          />
        ))}
      </InfiniteScroll>
    </>
  );
}
