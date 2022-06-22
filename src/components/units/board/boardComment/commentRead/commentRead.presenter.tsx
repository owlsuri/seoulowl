import InfiniteScroll from "react-infinite-scroller";
import BoardCommentReadItemUI from "./commentRead.presenterItem";
import { IBoardCommentReadProps } from "./commentRead.types";

export default function BoardCommentReadUI(props: IBoardCommentReadProps) {
  return (
    <>
      <div style={{ height: "800px", overflow: "auto" }}>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {props.data?.fetchBoardComments.map((el: any) => (
            <BoardCommentReadItemUI
              key={String(el._id)}
              el={el}
              isOpenModal={props.isOpenModal}
              onClickOpenModal={props.onClickOpenModal}
              onChangePassword={props.onChangePassword}
              onClickDelete={props.onClickDelete}
              handleCancel={props.handleCancel}
            />
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
}
