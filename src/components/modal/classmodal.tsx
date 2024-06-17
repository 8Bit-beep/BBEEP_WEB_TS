import { ClassList } from "src/types/home/class/class.types";
import * as S from "./style";
import { useState } from "react";
import { ClassStuList } from "src/types/home/class/classStu.types";
import useCheckClass from "src/hooks/home/class/useCheckClass";

interface ModalProps {
  DeleteButton: () => void;
  roomName: string;
}

const Modal = ({ DeleteButton, roomName }: ModalProps) => {
  const { classStuList } = useCheckClass();

  return (
    <S.Wrapper onClick={DeleteButton}>
      <S.ModalWrapper>
        <S.ModalTitle>{roomName}</S.ModalTitle>

        <S.ModalListWrap>
          {classStuList.map((item, idx) => (
            <S.ModalListContent key={idx}>{`${item.cls}학년 ${item.grade}반 ${item.userName}`}</S.ModalListContent>
          ))}
        </S.ModalListWrap>
      </S.ModalWrapper>
    </S.Wrapper>
  );
};
export default Modal;
