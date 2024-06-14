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
  const myRoomName = [{ roomName: className }];

  useEffect(() => {
    checkClass();
    checkClassStu();
  }, [isClickMenu]);

  useEffect(() => {
    loadFloorData();
  }, [isClickCategory]);

  // className 업데이트 후에 실행될 useEffect 추가
  useEffect(() => {
    if (classList) {
      // className이 업데이트된 후 실행할 작업
      // console.log("ClassName has been updated:", classList);
      // 필요한 추가 작업을 이곳에 작성
    }
  }, [classList]);

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
      await bbeepAxios.get(`/beep/attendances?code=${code}`).then((res) => {});
    } catch (error) {
      errorToast("출석 조회 실패");
    }
  };

  const loadFloorData = async () => {
    try {
      await bbeepAxios.get(`/beep/rooms/floor?page=1&size=10&floor=1`).then((res) => {
        setCode(res.data.code);
        setClassName(JSON.parse(res.request.response)[0].roomName);
      });
    } catch (error) {
      console.log("Error", error);
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
    imgData,
    isClicked,
    isClickStu,
    isClickMenu,
    classList,
    classStuList,
    floorData,
    myRoomName,
    handleImgChange,
    handleClickMenu,
    handleClickStu,
  };
};

export default useCheckClass;
