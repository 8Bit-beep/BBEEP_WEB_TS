import React from "react";
import * as S from "./style";
import Header from "src/components/common/header/index";
import FirstGradeImg from "../../../assets/imgs/1.svg";
import SecondGradeImg from "../../../assets/imgs/2.svg";
import ThirdGradeImg from "../../../assets/imgs/3.svg";
import UseSideBarNavigation from "src/utils/SideBar/useSideBarNavigation";
import { useLocation, useNavigate } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isClickCategory, handleCategoryClick } = UseSideBarNavigation({
    location,
    navigate,
  });

  return (
    <S.SideBarWrap>
      <Header />
      <S.MenuWrap>
        <S.StudentMenu>
          <S.StudentMenuCategories>
            <S.StudentMenuCategory
              onClick={() => handleCategoryClick("1학년")}
              $backgroundcolor={isClickCategory === "1학년" ? "true" : "false"}
            >
              <S.GradeImg src={FirstGradeImg} />
              <S.GradeSpan>1학년</S.GradeSpan>
            </S.StudentMenuCategory>
            <S.StudentMenuCategory
              onClick={() => handleCategoryClick("2학년")}
              $backgroundcolor={isClickCategory === "2학년" ? "true" : "false"}
            >
              <S.GradeImg src={SecondGradeImg} />
              <S.GradeSpan>2학년</S.GradeSpan>
            </S.StudentMenuCategory>
            <S.StudentMenuCategory
              onClick={() => handleCategoryClick("3학년")}
              $backgroundcolor={isClickCategory === "3학년" ? "true" : "false"}
            >
              <S.GradeImg src={ThirdGradeImg} />
              <S.GradeSpan>3학년</S.GradeSpan>
            </S.StudentMenuCategory>
          </S.StudentMenuCategories>
        </S.StudentMenu>
      </S.MenuWrap>
    </S.SideBarWrap>
  );
};

export default SideBar;
