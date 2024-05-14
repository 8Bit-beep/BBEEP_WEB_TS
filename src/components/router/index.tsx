import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "src/components/auth/Login";
import NoneLoadingMain from "src/components/home/index";
import CheckStudent from "src/components/home/student/studentOne";
import CheckStudentSecond from "src/components/home/student/studentTow";
import CheckStudentThird from "src/components/home/student/studentThree";
import CheckClass from "src/components/home/class/ClassOne";
import CheckClassSecond from "src/components/home/class/classTwo";
import CheckClassThird from "src/components/home/class/ClassThree";
import { StyleSheetManager } from "styled-components";
import { RecoilRoot } from "recoil";
import GlobalStyles from "src/styles/globalStyles";
const Router = () => {
  return (
    <StyleSheetManager>
      <RecoilRoot>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<NoneLoadingMain />} />
            <Route path="/check-student/first-grade" element={<CheckStudent />} />
            <Route path="/check-student/second-grade" element={<CheckStudentSecond />} />
            <Route path="/check-student/third-grade" element={<CheckStudentThird />} />
            <Route path="/check-class/first-floor" element={<CheckClass />} />
            <Route path="/check-class/second-floor" element={<CheckClassSecond />} />
            <Route path="/check-class/third-floor" element={<CheckClassThird />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </StyleSheetManager>
  );
};

export default Router;
