import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS_BEST = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      remarks
      price
      contents
      images
      tags
      pickedCount
    }
  }
`;
