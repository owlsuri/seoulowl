import * as S from "./basicModal.styles";
import { Modal } from "antd";
import { Scalars } from "../../../../commons/types/generated/types";

interface IPropsAlert {
  contents?: Scalars["String"];
  onClickExit: () => void;
}

export default function BasicModal(props: IPropsAlert) {
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
          <S.Logo src="/images/logo2.png" />
          <S.ModalText>{props.contents ? props.contents : ""}</S.ModalText>
          <S.ConfirmBtn onClick={props.onClickExit}>확인</S.ConfirmBtn>
        </S.ModalWrapper>
      </Modal>
    </>
  );
}
