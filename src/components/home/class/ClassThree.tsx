import React, { useState } from "react";
import ClassSideBar from "src/components/common/sidebar/classsidebar";
import * as S from "./style";
import useCheckClass from "src/hooks/home/class/useCheckClass";
import ModalPortal from "src/components/portal/modalpotal";
import Modal from "src/components/modal/classmodal";
import LabD from "src/assets/imgs/LabD.svg";

const ClassThree = () => {
  const { floorData, className, code } = useCheckClass();
  const [isClick, setIsClick] = useState(false);

  const ModalButton = () => {
    setIsClick((prev) => !prev);
  };

  floorData.map((item) => {
    console.log(item.roomName);
  });

  return (
    <ModalPortal>
      <S.CheckClassWrap>
        <ClassSideBar />
        <S.CheckClassMain>
          <S.ViewInfomationWrap>
            <S.SelectClassImgWrap>
              {/* {imgData.map((item, idx) => (
                <div key={idx} onClick={() => handleClickMenu(item.roomName)}>
                  <img src={item.default} onClick={ModalButton} />
                  <span>{item.roomName}</span>
                </div>
              ))} */}
              {floorData.map((item, idx) => (
                <S.SelectClassImg key={idx} style={{ display: "flex" }}>
                  <img src={LabD} onClick={ModalButton} />
                  <span style={{ position: "absolute", color: "white" }}>{item.roomName}</span>
                </S.SelectClassImg>
              ))}
            </S.SelectClassImgWrap>

            {isClick === true ? <Modal DeleteButton={() => ModalButton()} roomName={className} roomId={code} /> : <></>}
          </S.ViewInfomationWrap>
        </S.CheckClassMain>
      </S.CheckClassWrap>
    </ModalPortal>
  );
};

export default ClassThree;
