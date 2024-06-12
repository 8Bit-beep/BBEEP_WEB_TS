import React, { useState } from "react";
import ClassSideBar from "src/components/common/sidebar/classsidebar";
import * as S from "./style";
import useCheckClass from "src/hooks/home/class/useCheckClass";
import ModalPortal from "src/components/portal/modalpotal";
import Modal from "src/components/modal/classmodal";

const ClassOne = () => {
  const { isClickStu, handleClickMenu, classList, handleClickStu, imgData, classStuList, floorData } = useCheckClass();
  const [isClick, setIsClick] = useState(false);

  const ModalButton = () => {
    setIsClick((prev) => !prev);
  };

  // const ModalTitleText = imgDataFirstFloor.map((item, idx) => <span key={idx}>{item.text}</span>);

  return (
    <ModalPortal>
      <S.CheckClassWrap>
        <ClassSideBar />
        <S.CheckClassMain>
          <S.ViewInfomationWrap>
            <S.SelectClassImgWrap>
              {imgData.map((item, idx) => (
                <div key={idx} onClick={() => handleClickMenu(item.roomName)}>
                  <h1></h1>
                  <img src={item.default} onClick={ModalButton} />
                  <span>{item.roomName}</span>
                </div>
              ))}
            </S.SelectClassImgWrap>
            {/* <img src={isClickMenu === "Proj1실" ? Proj : ProjD} alt="" onClick={() => handleClickMenu("Proj1실")} />
              <img src={isClickMenu === "Proj2실" ? Proj2 : Proj2D} alt="" onClick={() => handleClickMenu("Proj2실")} /> */}
            <div>
              {classList !== null &&
                classList !== undefined &&
                classList.map((cls, idx) => (
                  <S.ViewInfoStudentWrap
                    key={idx}
                    $isclicked={isClickStu === cls.name ? "true" : "false"}
                    onClick={() => handleClickStu(cls.name)}
                  ></S.ViewInfoStudentWrap>
                ))}
            </div>
            {isClick === true ? (
              <Modal DeleteButton={ModalButton} classList={classList} classStuList={classStuList} />
            ) : (
              <></>
            )}
          </S.ViewInfomationWrap>
        </S.CheckClassMain>
      </S.CheckClassWrap>
    </ModalPortal>
  );
};

export default ClassOne;
