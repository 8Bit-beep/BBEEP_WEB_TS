import { ClassList } from "src/types/home/class/class.types";
import * as S from "./style";
import {  useState } from "react";

interface imgItem {
  default: string;
  text: string;
  id: number;
}

interface ModalProps {
  DeleteButton: () => void;
  classList: ClassList[];
  imgDataFirstFloor: imgItem[];
}

const Modal = ({ DeleteButton, classList, imgDataFirstFloor }: ModalProps) => {
  const [selectedId, setSelectedId] = useState(imgDataFirstFloor[0]?.id || null);

  const handleChangeId = (newId: any) => {
    setSelectedId(newId);
  };

  const selectedItem = imgDataFirstFloor.find((imgItem) => imgItem.id === selectedId);

  return (
    <S.Wrapper onClick={DeleteButton}>
      <S.ModalWrapper>
        {imgDataFirstFloor.map((imgItem, idx) =>
          imgItem.id === selectedId ? (
            <S.ModalTitle key={idx} onClick={() => handleChangeId(imgItem.id)}>
              {imgItem.text}{" "}
            </S.ModalTitle>
          ) : null
        )}

        <S.ModalListWrap>
          {classList.map((item, idx) => (
            <S.ModalListContent key={idx}>{item.name}</S.ModalListContent>
          ))}
        </S.ModalListWrap>
      </S.ModalWrapper>
    </S.Wrapper>
  );
};
export default Modal;
