import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UseSideBarNavigation from "src/utils/SideBar/useSideBarNavigation";

import token from "../../../libs/token/token";
import LabD from "src/assets/imgs/LabD.svg";

import { bbeepAxios } from "src/libs/axios/customAxios";
import { errorToast } from "src/libs/toast/toast";
import { useRecoilState } from "recoil";
import { ClassAtom } from "src/stores/home/checkClass/class.store";
import { ClassStuAtom } from "src/stores/home/checkClass/classStu.store";
import { FloorType } from "@src/types/home/class/floor.types";
import axios from "axios";
import { ACCESS_TOKEN_KEY } from "@src/constants/token/token.constants";
import { ClassStuList } from "@src/types/home/class/classStu.types";

const useCheckClass = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState("");
  const [isClickCls, setIsClickCls] = useState<string>("");
  const [isClickMenu, setIsClickMenu] = useState<string>("");
  const [classList, setClassList] = useRecoilState(ClassAtom);
  const [classStuList, setClassStuList] = useState<ClassStuList[]>([]);
  const [floorData, setFloorData] = useState<FloorType[]>([]);
  const [code, setCode] = useState<string>();
  const [className, setClassName] = useState<string>("");
  const { isClickCategory } = UseSideBarNavigation({ location, navigate });
  const imgData = [{ default: `${LabD}`, roomName: className }];
  const [array, setArray] = useState<string[]>([]);

  useEffect(() => {
    checkClass();
    checkClassStu();
  }, [isClickMenu]);

  useEffect(() => {
    loadFloorData();
  }, [isClickCategory]);

  const checkClass = async () => {
    try {
      await bbeepAxios.get(`/beep/rooms/name?name=${isClickMenu}`).then((res) => {
        setClassList(res.data);
      });
    } catch (error) {
      errorToast("실 조회 실패");
    }
  };

  const checkClassStu = async () => {
    try {
      await bbeepAxios.get(`/beep/attendances?code=${code}`).then((res) => {
        setClassStuList(res.data);
      });
    } catch (error) {
      errorToast("출석 조회 실패");
    }
  };

  const loadFloorData = async () => {
    try {
      await bbeepAxios.get(`/beep/rooms/floor?page=1&size=10&floor=${isClickCategory.substring(0, 1)}`).then((res) => {
        setCode(res.data.code);
        setFloorData(res.data);
      });
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleRoomName = (room: string) => {
    setClassName(room);
  };

  const handleClickMenu = (itemName: string) => {
    setIsClickMenu((prevItem) => (prevItem === itemName ? "" : itemName));
  };

  const handleClickCls = (itemName: string) => {
    setIsClickCls(itemName);
  };

  const handleImgChange = (itemName: string) => {
    setIsClicked(itemName);
  };

  return {
    imgData,
    isClicked,
    isClickCls,
    isClickMenu,
    classList,
    classStuList,
    className,
    floorData,
    array,
    handleImgChange,
    handleClickMenu,
    handleClickCls,
    handleRoomName,
  };
};

export default useCheckClass;
