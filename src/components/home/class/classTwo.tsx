import React, { useEffect, useState } from "react";
import ClassSideBar from "src/components/common/sidebar/classsidebar";
import * as S from "./style";
import useCheckClass from "src/hooks/home/class/useCheckClass";
import ModalPortal from "src/components/portal/modalpotal";
import Modal from "src/components/modal/classmodal";
import LabD from "src/assets/imgs/LabD.svg";

const ClassTwo = () => {
  const {
    isClickCls,
    handleClickMenu,
    classList,
    handleClickCls,
    imgData,
    classStuList,
    floorData,
    className,
    handleRoomName,
    loadFloorData,
  } = useCheckClass();
  const [isClick, setIsClick] = useState(false);

  const ModalButton = () => {
    setIsClick((prev) => !prev);
  };

  floorData.map((item) => {
    console.log(item.roomName);
  });

  return (
    <S.CheckClassWrap>
      <ClassSideBar />
      <S.CheckClassMain>
        <S.ViewInfomationWrap>
          <S.SelectClassImgWrap style={{ position: "relative" }}>
            {floorData.map((item, idx) => (
              <S.SelectClassImg key={idx} style={{ display: "flex" }} onClick={() => handleRoomName(item.roomName)}>
                <img src={LabD} onClick={ModalButton} />
                <span style={{ position: "absolute", color: "white" }}>{item.roomName}</span>
              </S.SelectClassImg>
            ))}
          </S.SelectClassImgWrap>

          <ModalPortal>
            {isClick === true ? <Modal DeleteButton={ModalButton} roomName={className} /> : <></>}
          </ModalPortal>
        </S.ViewInfomationWrap>
      </S.CheckClassMain>
    </S.CheckClassWrap>
  );
};

export default ClassTwo;
