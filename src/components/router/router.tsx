import { Routes, Route } from "react-router-dom";
import Login from "src/components/auth/Login";
import NoneLoadingMain from "src/components/home/index";
import CheckStudent from "src/components/home/student/studentOne";
import CheckStudentSecond from "src/components/home/student/studentTow";
import CheckStudentThird from "src/components/home/student/studentThree";
import CheckClass from "src/components/home/class/ClassOne";
import CheckClassSecond from "src/components/home/class/classTwo";
import CheckClassThird from "src/components/home/class/ClassThree";
import { RecoilRoot } from "recoil";
const router = () => {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<NoneLoadingMain />} />
        <Route path="/check-student/first-grade" element={<CheckStudent />} />
        <Route path="/check-student/second-grade" element={<CheckStudentSecond />} />
        <Route path="/check-student/third-grade" element={<CheckStudentThird />} />
        <Route path="/check-class/first-floor" element={<CheckClass />} />
        <Route path="/check-class/second-floor" element={<CheckClassSecond />} />
        <Route path="/check-class/third-floor" element={<CheckClassThird />} />
      </Routes>
    </RecoilRoot>
  );
};

export default router;
