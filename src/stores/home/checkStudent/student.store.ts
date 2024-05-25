import { StudentClassList } from "@src/types/home/student/student.tyeps";
import { atom } from "recoil";

export const StudentAtom = atom<StudentClassList[]>({
  key: "StudentAtom",
  default: [],
});
