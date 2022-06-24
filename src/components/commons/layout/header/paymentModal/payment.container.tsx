import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_USER_LOGGED_IN } from "../header.queries";
import ChargePaymentUI from "./payment.presenter";

export const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      balance
    }
  }
`;

export default function ChargePayment(props) {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState(0);

  const [alertModal, setAlertModal] = useState(false);
  const [modalContents, setModalContents] = useState("");
  const [errorAlertModal, setErrorAlertModal] = useState(false);

  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);

  // 이동모달
  const onClickRoutingModal = () => {
    router.back();
    location.reload();
    setAlertModal(false);
  };

  // 에러모달
  const onClickErrorModal = () => {
    setErrorAlertModal(false);
  };

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const onChangeOption = (event) => {
    const value = Number(event.target.value);
    setAmount(value);
  };

  const requestPay = () => {
    setIsOpen(false);
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011", 중복되면 안됨 없으면 랜덤으로 생성됨
        name: "seoulOwlPoint",
        amount: amount,
        buyer_email: userData?.fetchUserLoggedIn.email,
        buyer_name: userData?.fetchUserLoggedIn.name,
        // buyer_tel: "010-4242-4242",
        // buyer_addr: "코드캠프",
        // buyer_postcode: "01181",
        // m_redirect_url: "http:localhost:3000/market",
      },
      async (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          try {
            await createPointTransactionOfLoading({
              variables: {
                impUid: rsp.imp_uid,
              },
            });
            setModalContents("충전이 완료되었습니다.");
            setAlertModal(true);
          } catch (error) {
            setModalContents(error.message);
            setErrorAlertModal(true);
          }
          console.log(rsp);
        } else {
          // 결제 실패 시 로직,
          setModalContents("결제에 실패했습니다. 다시 시도해주세요.");
          setErrorAlertModal(true);
        }
      }
    );
  };

  return (
    <ChargePaymentUI
      isOpen={isOpen}
      clickRef={props.clickRef}
      alertModal={alertModal}
      modalContents={modalContents}
      errorAlertModal={errorAlertModal}
      onClickRoutingModal={onClickRoutingModal}
      onClickErrorModal={onClickErrorModal}
      onToggleModal={onToggleModal}
      onChangeOption={onChangeOption}
      requestPay={requestPay}
    />
  );
}
