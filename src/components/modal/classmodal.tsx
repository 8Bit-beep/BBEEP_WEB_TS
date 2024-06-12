import { ClassList } from "src/types/home/class/class.types";
import * as S from "./style";
import { useState } from "react";
import { ClassStuList } from "src/types/home/class/classStu.types";

interface imgItem {
  default: string;
  text: string;
  id: number;
}

interface ModalProps {
  DeleteButton: () => void;
  classList: ClassList[];
  classStuList: ClassStuList[];
}

const Modal = ({ DeleteButton, classList, classStuList }: ModalProps) => {
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

        <S.ModalListWrap>
          {classStuList.map((item) => (
            <S.ModalListContent key={item.num}>{item.userName}</S.ModalListContent>
          ))}
        </S.ModalListWrap>
      </S.ModalWrapper>
    </S.Wrapper>
  );
};
export default Modal;
