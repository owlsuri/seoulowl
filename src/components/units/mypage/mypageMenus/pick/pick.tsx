import { useQuery } from "@apollo/client";
import {
  FETCH_USED_ITEMS_COUNT_I_PICKED,
  FETCH_USED_ITEMS_I_PICKED,
} from "../../mypage.queries";

export default function Pick() {
  const { data } = useQuery(FETCH_USED_ITEMS_I_PICKED);
  const { data: pickedCount } = useQuery(FETCH_USED_ITEMS_COUNT_I_PICKED);
  console.log("❤", data, pickedCount);
  return (
    <>
      <>vlrvlt</>
    </>
  );
}
// errors: [{message: "$regex has to be a string", locations: [{line: 2, column: 3}],…}]
