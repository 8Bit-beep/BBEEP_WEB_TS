import { ClassStuList } from "src/types/home/class/classStu.types";
import { atom } from "recoil";

export const ClassStuAtom = atom<ClassStuList[]>({
  key: "ClassStu",
  default: [],
});
