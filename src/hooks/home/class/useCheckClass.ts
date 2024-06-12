import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UseSideBarNavigation from "src/utils/SideBar/useSideBarNavigation";

import Lab from "src/assets/imgs/Lab.svg";
import LabD from "src/assets/imgs/LabD.svg";
import Proj1D from "src/assets/imgs/Proj1D.svg";
import Proj2D from "src/assets/imgs/Proj2D.svg";
import Proj3D from "src/assets/imgs/Proj3D.svg";
import Proj4D from "src/assets/imgs/Proj4D.svg";
import Proj5D from "src/assets/imgs/Proj5D.svg";
import Proj5 from "src/assets/imgs/Proj5.svg";
import Proj6D from "src/assets/imgs/Proj6D.svg";
import Proj6 from "src/assets/imgs/Proj6.svg";
import { bbeepAxios } from "src/libs/axios/customAxios";
import { errorToast } from "src/libs/toast/toast";
import { useRecoilState } from "recoil";
import { ClassAtom } from "src/stores/home/checkClass/class.store";
import { StudentAtom } from "src/stores/home/checkStudent/student.store";
import { ClassStuAtom } from "src/stores/home/checkClass/classStu.store";

const useCheckClass = () => {
  const imgDataFirstFloor = [
    { default: `${Proj1D}`, text: "프로젝트1실", id: 1 },
    { default: `${Proj2D}`, text: "프로젝트2실", id: 2 },
  ];
  const imgDataSecondFloor = [
    { default: `${Proj3D}`, text: "프로젝트3실", id: 3 },
    { default: `${Proj4D}`, text: "프로젝트4실", id: 4 },
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
  const [isClickId, setisClickId] = useState<string>();
  const [classList, setClassList] = useRecoilState(ClassAtom);
  const [classStuList, setClassStuList] = useRecoilState(ClassStuAtom);
  const { isClickCategory } = UseSideBarNavigation({ location, navigate });

  useEffect(() => {
    checkClass();
    checkClassStu();
  }, [isClickCategory, isClickMenu]);

  const checkClass = async () => {
    try {
      await bbeepAxios.get(`/beep/rooms?name=${isClickMenu}`).then((res) => {
        setClassList(res.data);
        console.log(classList);
      });
    } catch (error) {
      errorToast("실 조회 실패");
    }
  };

  const checkClassStu = async () => {
    try {
      await bbeepAxios.get(`/beep/attendances?code=${isClickId}`).then((res) => {
        setClassStuList(res.data);
        console.log(classStuList);
      });
    } catch (error) {
      errorToast("출석 조회 실패");
    }
  };

  const handleClickMenu = (itemName: string) => {
    setIsClickMenu((prevItem) => (prevItem === itemName ? "" : itemName));
  };

  const handleClickStu = (itemName: string) => {
    setIsClickStu(itemName);
  };

  const handleClickId = (itemCode: string) => {
    setisClickId((prevItem) => (prevItem === itemCode ? "" : itemCode));
  };

  const handleImgChange = (itemName: string) => {
    setIsClicked(itemName);
  };

  return {
    imgDataFirstFloor,
    imgDataSecondFloor,
    imgDataThirdFloor,
    isClicked,
    isClickStu,
    isClickMenu,
    classList,
    classStuList,
    handleImgChange,
    handleClickMenu,
    handleClickStu,
  };
};

export default useCheckClass;
