import * as S from "./basicModal.styles";
import { Modal } from "antd";
import { useState } from "react";
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
        footer={null}
      >
        <S.ModalWrapper>
          <S.Logo> SeoulOwl </S.Logo>
          <S.ModalText>{props.contents ? props.contents : ""}</S.ModalText>
          <S.ConfirmBtn onClick={props.onClickExit}>확인</S.ConfirmBtn>
        </S.ModalWrapper>
      </Modal>
    </>
  );
}
