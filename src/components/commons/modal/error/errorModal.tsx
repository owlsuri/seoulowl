import * as S from "./ErrorModal.styles";
import { Modal } from "antd";

interface IPropsErrorAlert {
  contents?: string;
  onClickExit: () => void;
}

export default function ErrorModal(props: IPropsErrorAlert) {
  return (
    <>
      <Modal
        visible={true}
        closable={false}
        maskStyle={{
          width: "100%",
          height: "100%",
        }}
        bodyStyle={{
          width: "10px",
          height: "0px",
          backgroundColor: "#FFFFFF",
        }}
        footer={null}
        centered={true}
      >
        <S.ModalWrapper>
          <S.Logo src="/images/remove.png" />
          <S.ModalText>{props.contents ? props.contents : ""}</S.ModalText>
          <S.ConfirmBtn onClick={props.onClickExit}>확인</S.ConfirmBtn>
        </S.ModalWrapper>
      </Modal>
    </>
  );
}
