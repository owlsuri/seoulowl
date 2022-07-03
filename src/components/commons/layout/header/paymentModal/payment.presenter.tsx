import BasicModal from "../../../modal/basic/basicModal";
import ErrorModal from "../../../modal/error/errorModal";
import { Modal } from "antd";
import Head from "next/head";
import * as S from "./payment.styles";

export default function ChargePaymentUI(props) {
  return (
    <div>
      <button
        onClick={props.onToggleModal}
        ref={props.clickRef}
        style={{ display: "none" }}
      >
        결제하기
      </button>
      {props.alertModal && (
        <BasicModal
          onClickExit={props.onClickRoutingModal}
          contents={props.modalContents}
        />
      )}

      {props.errorAlertModal && (
        <ErrorModal
          onClickExit={props.onClickErrorModal}
          contents={props.modalContents}
        />
      )}
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      {props.isOpen && (
        <Modal
          visible={true}
          onOk={props.onToggleModal}
          onCancel={props.onToggleModal}
        >
          <S.SelectTitle>충전하실 금액을 선택해주세요!</S.SelectTitle>
          <S.Drop id="option" onChange={props.onChangeOption}>
            <S.Option selected disabled>
              포인트 선택
            </S.Option>
            <S.Option value="100">100원</S.Option>
            <S.Option value="500">500원</S.Option>
            <S.Option value="2000">2,000원</S.Option>
            <S.Option value="5000">5,000원</S.Option>
          </S.Drop>
          <S.ChargeBtn onClick={props.requestPay}>충전하기</S.ChargeBtn>
        </Modal>
      )}
    </div>
  );
}
