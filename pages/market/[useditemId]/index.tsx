import MarketDetail from "../../../src/components/units/market/marketDetail/marketDeatil.container";
import { request, gql } from "graphql-request";

export default function MarketDetailPage(props: any) {
  return <MarketDetail data={props.myMarketData} />;
}

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        zipcode
        address
        addressDetail
      }
      seller {
        name
        email
      }
      createdAt
    }
  }
`;

export const getServerSideProps = async (context) => {
  const result = await request(
    "https://backend06.codebootcamp.co.kr/graphql11",
    FETCH_USED_ITEM,
    { useditemId: context.query.useditemId }
  );

  return {
    props: {
      myMarketData: {
        _id: result.fetchUseditem._id,
        name: result.fetchUseditem.name,
        remarks: result.fetchUseditem.remarks,
        contents: result.fetchUseditem.contents,
        price: result.fetchUseditem.price,
        images: result.fetchUseditem.images,
        tags: result.fetchUseditem.tags,
        pickedCount: result.fetchUseditem.pickedCount,
        seller: result.fetchUseditem.seller,
        useditemAddress: result.fetchUseditem.useditemAddress,
        createdAt: result.fetchUseditem.createdAt,
      },
    },
  };
};
