import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { useAuth } from "../../../commons/hooks/useAuth";
import { basketItemState } from "../../../commons/store";
import MypageUI from "./mypage.presenter";
import {
  FETCH_POINT_TRANSACTIONS_COUNT_OF_BUYING,
  FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING,
  FETCH_USED_ITEMS_COUNT_I_PICKED,
} from "./mypage.queries";

export default function Mypage() {
  useAuth();

  const [isSelected, setIsSelected] = useState("cart");

  const [basketItems] = useRecoilState(basketItemState);

  const { data: buyingCount } = useQuery(
    FETCH_POINT_TRANSACTIONS_COUNT_OF_BUYING
  );

  const { data: pickedCount } = useQuery(FETCH_USED_ITEMS_COUNT_I_PICKED);

  const { data: sellingCount } = useQuery(
    FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING
  );

  return (
    <MypageUI
      isSelected={isSelected}
      setIsSelected={setIsSelected}
      buyingCount={buyingCount}
      basketItems={basketItems}
      pickedCount={pickedCount}
      sellingCount={sellingCount}
    />
  );
}
