export interface NavigationProps {
  location: {
    pathname: string;
  };
  navigate: (path: string) => void;
}

export interface TeacherInfo {
  name: string;
  email: string;
  department: string;
  job: string;
}
