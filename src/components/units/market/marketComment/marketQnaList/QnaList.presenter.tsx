import InfiniteScroll from "react-infinite-scroller";
import MarketQnAListItem from "./QnaList.presenteritem";
import { IMarketQnaListProps } from "./QnaList.types";

export default function MarketQnAListUI(props: IMarketQnaListProps) {
  return (
    <>
      <div style={{ height: "700px", overflow: "auto" }}>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {props.data?.fetchUseditemQuestions.map((el: any) => (
            <MarketQnAListItem
              key={String(el?._id)}
              el={el}
              data={props.data}
              userData={props.userData}
              onClickDelete={props.onClickDelete}
            />
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
}
