import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { basketItemState, pickState } from "../../../../commons/store";
import {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
  IMutationDeleteUseditemArgs,
  IMutationToggleUseditemPickArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USER_LOGGED_IN } from "../../login/login.queries";
import { FETCH_USED_ITEMS_I_PICKED } from "../../mypage/mypage.queries";
import MarketDetailUI from "./marketDeatil.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USEDITEM,
  FETCH_USED_ITEM,
  TOGGLE_USEDITEM_PICK,
} from "./marketDeatil.queries";

export default function MarketDetail() {
  const router = useRouter();

  const [, setBasketItems] = useRecoilState(basketItemState);

  const [detailColor, setDetailColor] = useState(true);
  const [qnaColor, setQnaColor] = useState(false);
  const [heart, setHeart] = useState(false);
  const [isShowQnA, setIsShowQnA] = useState(false);
  const [, setIsLoad] = useState(false);

  const [alertModal, setAlertModal] = useState(false);
  const [modalContents, setModalContents] = useState("");
  const [errorAlertModal, setErrorAlertModal] = useState(false);
  const [isRoute, setIsRoute] = useState(false);

  const { data: userInfo } = useQuery(FETCH_USER_LOGGED_IN);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.useditemId) },
  });

  const { data: pickedData } = useQuery(FETCH_USED_ITEMS_I_PICKED, {
    variables: { search: "" },
  });

  const [toggleUseditemPick] = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(TOGGLE_USEDITEM_PICK);

  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USEDITEM);

  const [createPointTransactionOfBuyingAndSelling] = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);

  // 이동모달
  const onClickRoutingModal = () => {
    router.push(`/market`);
    setAlertModal(false);
  };
  // 확인모달
  const onClickConfirmModal = () => {
    setAlertModal(false);
  };

  // 에러모달
  const onClickErrorModal = () => {
    setErrorAlertModal(false);
  };

  const onClickShowDetail = () => {
    setIsShowQnA(false);
    setDetailColor((prev) => !prev);
    setQnaColor((prev) => !prev);
  };

  const onClickQnA = () => {
    setIsShowQnA(true);
    setDetailColor((prev) => !prev);
    setQnaColor((prev) => !prev);
  };

  // 장바구니에 담기
  const onClickBasket = (el: any) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    const temp = baskets.filter((basketEl: any) => basketEl._id === el._id);

    if (temp.length === 1) {
      setModalContents("이미 장바구니에 담겨있는 상품입니다.");
      setErrorAlertModal(true);
      return;
    }

    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    localStorage.setItem("baskets", JSON.stringify(baskets));

    setIsLoad(true);
    setBasketItems(baskets);

    setAlertModal(true);
    setModalContents("장바구니에 담았습니다.");
  };

  // 찜하기
  const onClickPick = async () => {
    try {
      await toggleUseditemPick({
        variables: { useditemId: String(router.query.useditemId) },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: { useditemId: String(router.query.useditemId) },
          },
        ],
      });
      setHeart((prev) => !prev);
    } catch (error) {
      setModalContents(error.message);
      setErrorAlertModal(true);
    }
  };

  const pickedId = [];
  useEffect(() => {
    pickedData?.fetchUseditemsIPicked.map((el: any) => {
      pickedId.push(el._id);

      if (pickedId.includes(router.query.useditemId)) {
        setHeart(true);
      }
    });
  }, [pickedId]);

  // 결제하기
  const onClickPay = async () => {
    if (userInfo.userPoint.amount >= data?.fetchUseditem?.price) {
      try {
        await createPointTransactionOfBuyingAndSelling({
          variables: {
            useritemId: String(router.query.useditemId),
          },
        });
        setAlertModal(true);
        setModalContents("결제가 완료되었습니다!");
        setIsRoute(true);
      } catch (error) {
        setModalContents(error.message);
        setErrorAlertModal(true);
      }
    } else {
      setModalContents("충전을 먼저 해주세요.");
      setErrorAlertModal(true);
    }
  };

  const onClickMoveEdit = () => {
    router.push(`/market/${router.query.useditemId}/edit`);
  };

  const onClickDelete = async () => {
    try {
      await deleteUseditem({
        variables: { useditemId: String(router.query.useditemId) },
      });
      setAlertModal(true);
      setModalContents("삭제되었습니다!");
      setIsRoute(true);
    } catch (error) {
      setModalContents(error.message);
      setErrorAlertModal(true);
    }
  };

  return (
    <MarketDetailUI
      data={data}
      userInfo={userInfo}
      isShowQnA={isShowQnA}
      detailColor={detailColor}
      qnaColor={qnaColor}
      heart={heart}
      onClickPay={onClickPay}
      onClickPick={onClickPick}
      onClickBasket={onClickBasket}
      onClickShowDetail={onClickShowDetail}
      onClickQnA={onClickQnA}
      onClickMoveEdit={onClickMoveEdit}
      onClickDelete={onClickDelete}
      onClickRoutingModal={onClickRoutingModal}
      onClickConfirmModal={onClickConfirmModal}
      onClickErrorModal={onClickErrorModal}
      alertModal={alertModal}
      modalContents={modalContents}
      errorAlertModal={errorAlertModal}
      isRoute={isRoute}
    />
  );
}
