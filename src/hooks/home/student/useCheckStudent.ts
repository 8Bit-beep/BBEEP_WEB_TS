import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UseSideBarNavigation from "src/utils/SideBar/useSideBarNavigation";
import CONFIG from "src/config/config.json";
import Cookies from "js-cookie";
import Lab from "src/assets/imgs/Lab.svg";
import LabD from "src/assets/imgs/LabD.svg";
import Proj1D from "src/assets/imgs/Proj1D.svg";
import Proj1 from "src/assets/imgs/Proj1.svg";
import Proj2D from "src/assets/imgs/Proj2D.svg";
import Proj2 from "src/assets/imgs/Proj2.svg";
import Proj3D from "src/assets/imgs/Proj3D.svg";
import Proj3 from "src/assets/imgs/Proj3.svg";
import Proj4D from "src/assets/imgs/Proj4D.svg";
import Proj4 from "src/assets/imgs/Proj4.svg";
import Proj5D from "src/assets/imgs/Proj5D.svg";
import Proj5 from "src/assets/imgs/Proj5.svg";
import Proj6D from "src/assets/imgs/Proj6D.svg";
import Proj6 from "src/assets/imgs/Proj6.svg";
import { StudentClassList } from "src/types/home/student/student.tyeps";
import { bbeepAxios } from "src/libs/axios/customAxios";
import { errorToast } from "src/libs/toast/toast";
import { useRecoilState } from "recoil";
import { StudentAtom } from "src/stores/home/checkStudent/student.store";

const useCheckStudent = () => {
  const ImgDataFirstFloor = [
    { default: `${Proj1D}`, clicked: `${Proj1}` },
    { default: `${Proj2D}`, clicked: `${Proj2}` },
  ];
  const ImgDataSecondFloor = [
    { default: `${Proj3D}`, clicked: `${Proj3}` },
    { default: `${Proj4D}`, clicked: `${Proj4}` },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab1실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab2실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab3실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab4실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab5실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab6실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab7실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab8실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab9실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab10실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab11실" },
  ];

  const imgDataThirdFloor = [
    { default: `${Proj5D}`, clicked: `${Proj5}` },
    { default: `${Proj6D}`, clicked: `${Proj6}` },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab12실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab13실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab14실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab15실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab16실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab17실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab18실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab19실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab20실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab21실" },
    { default: `${LabD}`, clicked: `${Lab}`, text: "Lab22실" },
  ];

  const location = useLocation();
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState("");
  const [isClickStu, setIsClickStu] = useState<string>("");
  const [isClickMenu, setIsClickMenu] = useState<string>("");
  const [studentClassList, setStudentClassList] = useRecoilState(StudentAtom);
  const { isClickCategory } = UseSideBarNavigation({ location, navigate });
  const grade = Number(isClickCategory.substring(0, 1));
  const cls = Number(isClickMenu.substring(0, 1));

  useEffect(() => {
    checkStudent();
  }, [isClickCategory, isClickMenu]);

  const checkStudent = async () => {
    try {
      await bbeepAxios
        .get(`/students/member`, {
          params: {
            grade,
            cls,
          },
        })
        .then((res) => {
          setStudentClassList(res.data);
          console.log(studentClassList);
        });
    } catch (error) {
      errorToast("학생 조회 실패");
    }
  };

  const handleClickMenu = (itemName: string) => {
    setIsClickMenu((prevItem) => (prevItem === itemName ? "" : itemName));
  };

  const handleClickStu = (itemName: string) => {
    setIsClickStu(itemName);
  };

  const handleImgChange = (itemName: string) => {
    setIsClicked(itemName);
  };

  return {
    ImgDataFirstFloor,
    ImgDataSecondFloor,
    imgDataThirdFloor,
    isClicked,
    isClickStu,
    isClickMenu,
    studentClassList,
    handleImgChange,
    handleClickMenu,
    handleClickStu,
  };
};

export default useCheckStudent;
