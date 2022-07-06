import BoardDetail from "../../../src/components/units/board/boardDetail/boardDetail.container";
import { request, gql } from "graphql-request";

export default function BoardDetailPage(props: any) {
  return <BoardDetail data={props.myBoardData} />;
}

export const FETCH_BOARD: any = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      boardAddress {
        zipcode
        address
        addressDetail
      }
      createdAt
    }
  }
`;

export const getServerSideProps = async (context: any) => {
  const result = await request(
    "https://backend06.codebootcamp.co.kr/graphql11",
    FETCH_BOARD,
    { boardId: context.query.boardId }
  );

  return {
    props: {
      myBoardData: {
        _id: result.fetchBoard._id,
        writer: result.fetchBoard.writer,
        title: result.fetchBoard.title,
        contents: result.fetchBoard.contents,
        youtubeUrl: result.fetchBoard.youtubeUrl,
        images: result.fetchBoard.images,
        likeCount: result.fetchBoard.likeCount,
        dislikeCount: result.fetchBoard.dislikeCount,
        boardAddress: result.fetchBoard.boardAddress,
        createdAt: result.fetchBoard.createdAt,
      },
    },
  };
};
