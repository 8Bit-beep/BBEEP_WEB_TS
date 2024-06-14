import React, { useState } from "react";
import ClassSideBar from "src/components/common/sidebar/classsidebar";
import * as S from "./style";
import useCheckClass from "src/hooks/home/class/useCheckClass";
import ModalPortal from "src/components/portal/modalpotal";
import Modal from "src/components/modal/classmodal";

const ClassOne = () => {
  const { isClickCls, handleClickMenu, classList, handleClickCls, imgData, classStuList,  } = useCheckClass();
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
                  <img src={item.default} onClick={ModalButton} />
                  <span>{item.roomName}</span>
                </div>
              ))}
            </S.SelectClassImgWrap>
            {/* <img src={isClickMenu === "Proj1실" ? Proj : ProjD} alt="" onClick={() => handleClickMenu("Proj1실")} />
              <img src={isClickMenu === "Proj2실" ? Proj2 : Proj2D} alt="" onClick={() => handleClickMenu("Proj2실")} /> */}

            {/* {
              <div>
                {floorData.map((item, idx) => (
                  <div key={idx}>
                    <span> {item.roomName}</span>
                  </div>
                ))}
              </div>
            } */}

            
            
            {isClick === true ? (
              <Modal DeleteButton={ModalButton} classList={classList} />
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
