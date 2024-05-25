import React from "react";
import StudentSideBar from "src/components/common/sidebar/index";
import * as S from "./style";
import ClassOne from "src/assets/imgs/Class1.svg";
import ClassOneD from "src/assets/imgs/Class1d.svg";
import ClassTwo from "src/assets/imgs/Class2.svg";
import ClassTwoD from "src/assets/imgs/Class2d.svg";
import ClassThree from "src/assets/imgs/Class3.svg";
import ClassThreeD from "src/assets/imgs/Class3d.svg";
import ClassFour from "src/assets/imgs/Class4.svg";
import ClassFourD from "src/assets/imgs/Class4d.svg";
import useCheckStudent from "src/hooks/home/student/useCheckStudent";

const CheckStudentTwo = () => {
  const { isClickMenu, isClickStu, handleClickMenu, studentClassList, handleClickStu } = useCheckStudent();
  return (
    <S.CheckClassWrap>
      <StudentSideBar />
      <S.CheckClassMain>
        <S.ViewInfomationWrap>
          <S.SelectClassImgWrap>
            <img src={isClickMenu === "1반" ? ClassOne : ClassOneD} alt="" onClick={() => handleClickMenu("1반")} />
            <img src={isClickMenu === "2반" ? ClassTwo : ClassTwoD} alt="" onClick={() => handleClickMenu("2반")} />
            <img src={isClickMenu === "3반" ? ClassThree : ClassThreeD} alt="" onClick={() => handleClickMenu("3반")} />
            <img src={isClickMenu === "4반" ? ClassFour : ClassFourD} alt="" onClick={() => handleClickMenu("4반")} />
          </S.SelectClassImgWrap>
          <S.ViewInfoUtilityWrap>
            <span>이름</span>
            <span>학번</span>
            <span>층</span>
            <span>실</span>
          </S.ViewInfoUtilityWrap>
          {studentClassList !== null &&
            studentClassList !== undefined &&
            studentClassList.map((std, idx) => (
              <S.ViewInfoStudentWrap
                key={idx}
                $isclicked={isClickStu === std.name ? "true" : "false"}
                onClick={() => handleClickStu(std.name)}
              >
                <S.ViewInfoStudentName>{std.name}</S.ViewInfoStudentName>
                <S.ViewInfoStudentClassNumber>
                  {std.num >= 10
                    ? `1${isClickMenu.substring(0, 1)}${std.num}`
                    : `1${isClickMenu.substring(0, 1)}0${std.num}`}
                </S.ViewInfoStudentClassNumber>
                <S.ViewinfoStudentFloor>{std.floor}</S.ViewinfoStudentFloor>
                <S.ViewInfoStudentClass>{std.roomName}</S.ViewInfoStudentClass>
              </S.ViewInfoStudentWrap>
            ))}
        </S.ViewInfomationWrap>
      </S.CheckClassMain>
    </S.CheckClassWrap>
  );
};

export default CheckStudentTwo;
