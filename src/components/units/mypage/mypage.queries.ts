import { gql } from "@apollo/client";

// pick
export const FETCH_USED_ITEMS_I_PICKED = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      _id
      name
      price
      pickedCount
      images
      soldAt
    }
  }
`;

export const FETCH_USED_ITEMS_COUNT_I_PICKED = gql`
  query fetchUseditemsCountIPicked {
    fetchUseditemsCountIPicked
  }
`;

// buy
export const FETCH_POINT_TRANSACTIONS_OF_BUYING = gql`
  query fetchPointTransactionsOfBuying($search: String, $page: Int) {
    fetchPointTransactionsOfBuying(search: $search, page: $page) {
      _id
      amount
      status
      useditem {
        name
        price
        soldAt
      }
    }
  }
`;
export const FETCH_POINT_TRANSACTIONS_COUNT_OF_BUYING = gql`
  query fetchPointTransactionsCountOfBuying {
    fetchPointTransactionsCountOfBuying
  }
`;

// sell
export const FETCH_POINT_TRANSACTIONS_OF_SELLING = gql`
  query fetchPointTransactionsOfSelling($search: String, $page: Int) {
    fetchPointTransactionsOfSelling(search: $search, page: $page) {
      _id
      amount
      status
      useditem {
        name
        price
        soldAt
      }
    }
  }
`;

export const FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING = gql`
  query fetchPointTransactionsCountOfSelling {
    fetchPointTransactionsCountOfSelling
  }
`;

// Point
export const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactions($search: String, $page: Int) {
    fetchPointTransactions(search: $search, page: $page) {
      _id
      amount
      balance
      status
      statusDetail
      createdAt
    }
  }
`;

export const FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING = gql`
  query fetchPointTransactionsCountOfLoading {
    fetchPointTransactionsCountOfLoading
  }
`;

export const FETCH_POINT_TRANSACTIONS_OF_LOADING = gql`
  query fetchPointTransactionsOfLoading($search: String, $page: Int) {
    fetchPointTransactionsOfLoading(search: $search, page: $page) {
      _id
      amount
      balance
      status
      statusDetail
      createdAt
    }
  }
`;
