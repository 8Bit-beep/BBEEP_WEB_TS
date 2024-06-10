import React, { useEffect } from "react";
import * as S from "./style";
import Logo from "src/assets/imgs/HeaderLogo.svg";
import SearchIcon from "src/assets/imgs/SearchIcon.svg";
import useHeader from "src/hooks/common/header/useHeader";
import StudentBtn from "src/assets/imgs/StudentBtn.svg";
import ClassBtn from "src/assets/imgs/ClassBtn.svg";
import Profile from "src/assets/imgs/Prifile.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { ...header } = useHeader();
  useEffect(() => {
    header.selectTeacherInfo();
  }, []);
  const navigate = useNavigate();
  return (
    <S.HeaderWrap>
      <img src={Logo} alt="로고" onClick={() => navigate("/")} />
      <S.SearchInputWrap>
        <img src={SearchIcon} alt="돋보기" />
        <input type="text" value={header.name} onChange={header.searchName} />
      </S.SearchInputWrap>
      <S.ButtonWrap>
        <S.NavigationButton
          onClick={() => {
            header.HandleCategoryClick("학생 조회하기");
          }}
          $isclicked={header.isClicked === "학생 조회하기" ? "true" : "false"}
        >
          <img src={StudentBtn} alt="학생 조회하기" />
          <label>학생 조회하기</label>
        </S.NavigationButton>
        <S.NavigationButton
          onClick={() => header.HandleCategoryClick("실 조회하기")}
          $isclicked={header.isClicked === "실 조회하기" ? "true" : "false"}
        >
          <img src={ClassBtn} alt="실 조회하기" />
          <label>실 조회하기</label>
        </S.NavigationButton>
      </S.ButtonWrap>
      <S.ProfileWrap>
        <img src={Profile} alt="" />
        <div>
          <h4>{header.info.name}</h4>
          <h5>{header.info.job}</h5>
        </div>
      </S.ProfileWrap>
    </S.HeaderWrap>
  );
};

export default Header;
