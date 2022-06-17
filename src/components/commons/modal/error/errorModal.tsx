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
        footer={null}
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
