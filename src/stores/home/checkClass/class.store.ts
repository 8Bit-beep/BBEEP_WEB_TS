import { ClassList } from "src/types/home/class/class.types";
import { atom } from "recoil";

export const ClassAtom = atom<ClassList[]>({
  key: "ClassAtom",
  default: [],
});
