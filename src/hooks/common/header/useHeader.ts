import { bbeepAxios } from "src/libs/axios/customAxios";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { NavigationProps, TeacherInfo } from "src/types/common/header/header.types";
import { useSetRecoilState } from "recoil";
import { StudentAtom } from "src/stores/home/checkStudent/student.store";

const useHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isClicked, setIsClicked] = useState<string>("학생 조회하기");
  const [name, setName] = useState<string>("");
  const [info, setInfo] = useState<TeacherInfo>({
    name: "",
    email: "",
    department: "",
    job: "",
  });
  const setStudentClassList = useSetRecoilState(StudentAtom);

  const selectTeacherInfo = async () => {
    bbeepAxios.get("/teachers/info").then((res) => {
      setInfo(res.data);
      console.log(info.job);
    });
  };

  const searchName = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);

    try {
      await bbeepAxios.get(`/students/name?name=${name}`).then((res) => {
        setStudentClassList(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const HandleNavigation = ({ location, navigate }: NavigationProps) => {
    switch (location.pathname) {
      case "/check-student/first-grade":
        setIsClicked("학생 조회하기");
        break;
      case "/check-student/second-grade":
        setIsClicked("학생 조회하기");
        break;
      case "/check-student/third-grade":
        setIsClicked("학생 조회하기");
        break;
      case "/check-class/first-floor":
        setIsClicked("실 조회하기");
        break;
      case "/check-class/second-floor":
        setIsClicked("실 조회하기");
        break;
      case "/check-class/third-floor":
        setIsClicked("실 조회하기");
        break;
      default:
        setIsClicked("");
        break;
    }
  };

  const HandleCategoryClick = (itemName: string) => {
    setIsClicked(itemName);
    switch (itemName) {
      case "학생 조회하기":
        navigate("/check-student/first-grade");
        break;
      case "실 조회하기":
        navigate("/check-class/first-floor");
        break;
      default:
        navigate("");
    }
  };

  useEffect(() => {
    HandleNavigation({ location, navigate });
  }, [location.pathname]);

  return {
    info,
    isClicked,
    name,
    HandleNavigation,
    HandleCategoryClick,
    selectTeacherInfo,
    searchName,
  };
};

export default useHeader;
