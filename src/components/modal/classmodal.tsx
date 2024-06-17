import { ClassList } from "src/types/home/class/class.types";
import * as S from "./style";
import { useState } from "react";
import { ClassStuList } from "src/types/home/class/classStu.types";
import useCheckClass from "src/hooks/home/class/useCheckClass";

interface ModalProps {
  DeleteButton: () => void;
}

const Modal = ({ DeleteButton }: ModalProps) => {
  const { floorData, classStuList } = useCheckClass();

  const TargetIdx = () => {
    for (let i = 0; i < floorData.length; i++) {
      console.log(`Comparing roomName: ${floorData[i].roomName} with idx: ${floorData[i].idx}`);
      if (floorData[i].roomName === "project2") {
        return i;
      }
    }
    return -1;
  };

  const targetIdx = TargetIdx();
  console.log("타겟 아이디", targetIdx);

  return (
    <S.Wrapper onClick={DeleteButton}>
      <S.ModalWrapper>
        {floorData.map((item, idx) =>
          idx === targetIdx ? <S.ModalTitle key={idx}>{item.roomName}</S.ModalTitle> : null
        )}

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
