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
  imgDataFirstFloor: imgItem[];
  classStuList: ClassStuList[];
}

const Modal = ({ DeleteButton, classList, imgDataFirstFloor, classStuList, }: ModalProps) => {
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
          {classStuList.map((item) => (
            <S.ModalListContent key={item.num}>
              {item.userName}
            </S.ModalListContent>
          ))}
        </S.ModalListWrap>
      </S.ModalWrapper>
    </S.Wrapper>
  );
};
export default Modal;
