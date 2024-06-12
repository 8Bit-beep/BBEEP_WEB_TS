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
import { FloorType } from "@src/types/home/class/floor.types";

const useCheckClass = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState("");
  const [isClickStu, setIsClickStu] = useState<string>("");
  const [isClickMenu, setIsClickMenu] = useState<string>("");
  const [classList, setClassList] = useRecoilState(ClassAtom);
  const [classStuList, setClassStuList] = useRecoilState(ClassStuAtom);
  const [floorData, setFloorData] = useState<FloorType[]>([]);
  const [code, setCode] = useState<number>();
  const [className, setClassName] = useState<string>("");
  const { isClickCategory } = UseSideBarNavigation({ location, navigate });
  const imgData = [{ default: `${LabD}`, roomName: className }];

  const floor = Number(isClickCategory.substring(0, 1));

  useEffect(() => {
    checkClass();
    checkClassStu();
  }, [isClickMenu]);

  useEffect(() => {
    loadFloorData();
  }, [isClickCategory]);

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
      await bbeepAxios.get(`/beep/attendances?code=${code}`).then((res) => {});
    } catch (error) {
      errorToast("출석 조회 실패");
    }
  };

  const loadFloorData = async () => {
    try {
      await bbeepAxios.get(`/beep/rooms/floor?floor=${floor}`).then((res) => {
        setFloorData(res.data);
        setCode(res.data.code);
        setClassName(res.data.name);
      });
    } catch (error) {}
  };

  const handleClickMenu = (itemName: string) => {
    setIsClickMenu((prevItem) => (prevItem === itemName ? "" : itemName));
  };

  const handleClickStu = (itemName: string) => {
    setIsClickStu(itemName);
  };

  // const handleClickId = (itemCode: string) => {
  //   setisClickId((prevItem) => (prevItem === itemCode ? "" : itemCode));
  // };

  const handleImgChange = (itemName: string) => {
    setIsClicked(itemName);
  };

  return {
    imgData,
    isClicked,
    isClickStu,
    isClickMenu,
    classList,
    classStuList,
    floorData,
    handleImgChange,
    handleClickMenu,
    handleClickStu,
  };
};

export default useCheckClass;
