import { ClassList } from "src/types/home/class/class.types";
import * as S from "./style";
import { useState } from "react";
import { ClassStuList } from "src/types/home/class/classStu.types";
import useCheckClass from "src/hooks/home/class/useCheckClass";

interface ModalProps {
  DeleteButton: () => void;
  classList: ClassList[];
}

const Modal = ({ DeleteButton, classList }: ModalProps) => {
  const { floorData, classStuList } = useCheckClass();
  return (
    <S.Wrapper onClick={DeleteButton}>
      <S.ModalWrapper>
        {/* {imgDataFirstFloor.map((imgItem, idx) =>
          imgItem.id === selectedId ? (
            <S.ModalTitle key={idx} onClick={() => handleChangeId(imgItem.id)}>
              {imgItem.text}{" "}
            </S.ModalTitle>
          ) : null,
        )} */}

        {floorData.map((item, idx) => (
          <S.ModalTitle key={idx}>{item.roomName}</S.ModalTitle>
        ))}

        <S.ModalListWrap>
          {classStuList.map((item, idx) => (
            <S.ModalListContent key={idx}>{item.userName}</S.ModalListContent>
          ))}
        </S.ModalListWrap>
      </S.ModalWrapper>
    </S.Wrapper>
  );
};
export default Modal;
