import React, { useState } from "react";
import ClassSideBar from "src/components/common/sidebar/classsidebar";
import * as S from "./style";
import useCheckClass from "src/hooks/home/class/useCheckClass";
import ModalPortal from "src/components/portal/modalpotal";
import Modal from "src/components/modal/classmodal";
import LabD from "src/assets/imgs/LabD.svg";

const ClassOne = () => {
  const { floorData, handleRoomName, className } = useCheckClass();
  const [isClick, setIsClick] = useState(false);

  const ModalButton = () => {
    setIsClick((prev) => !prev);
  };

  return (
    <ModalPortal>
      <S.CheckClassWrap>
        <ClassSideBar />
        <S.CheckClassMain>
          <S.ViewInfomationWrap>
            <S.SelectClassImgWrap style={{ position: "relative" }}>
              {floorData.map((item, idx) => (
                <S.SelectClassImg style={{ position: "relative" }} onClick={() => handleRoomName(item.roomName)}>
                  <img src={LabD} key={idx} onClick={ModalButton} />
                  <span style={{ position: "absolute", color: "white" }}>{item.roomName}</span>
                </S.SelectClassImg>
              ))}
            </S.SelectClassImgWrap>
            {isClick === true ? <Modal DeleteButton={ModalButton} roomName={className} /> : <></>}
          </S.ViewInfomationWrap>
        </S.CheckClassMain>
      </S.CheckClassWrap>
    </ModalPortal>
  );
};

export default ClassOne;
