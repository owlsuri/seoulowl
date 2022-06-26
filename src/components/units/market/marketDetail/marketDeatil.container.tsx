import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { basketItemState } from "../../../../commons/store";
import {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
  IMutationDeleteUseditemArgs,
  IMutationToggleUseditemPickArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import MarketDetailUI from "./marketDeatil.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USEDITEM,
  FETCH_USED_ITEM,
  FETCH_USER_LOGGED_IN,
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

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.useditemId) },
  });

  const { data: userData } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

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

    const temp = baskets.filter((basketEl) => basketEl._id === el._id);

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

  // 결제하기
  const onClickPay = async () => {
    if (
      userData?.fetchUserLoggedIn?.userPoint.amount >=
      data?.fetchUseditem?.price
    ) {
      try {
        const pay = await createPointTransactionOfBuyingAndSelling({
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
      userData={userData}
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
