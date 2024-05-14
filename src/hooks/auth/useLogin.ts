import { useState, useCallback } from "react";
import CONFIG from "src/config/config.json";
import Cookies from "js-cookie";
import axios from "axios";

interface User {
  id: string;
  password: string;
}

const useLogin = () => {
  // const [id, setId] = useState<string>("");
  // const [pw, setPw] = useState<string>("");
  const [user, setUser] = useState<User>({
    id: "",
    password: "",
  });

  // const idEventhandle = (e: any) => {
  //   setId(e.target.value);
  // };

  const eventHandle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setUser((prev) => ({ ...prev, [name]: value }));
    },
    [setUser]
  );

  const loginButton = async () => {
    if (user.id === "" && user.password === "") {
      alert("아이디 비밀번호를 입력해주세요");
    } else {
      try {
        await axios
          .post(`${CONFIG.serverUrl}/auth/sign-in`, {
            id: user.id,
            password: user.password,
          })
          .then((response) => {
            alert("로그인 성공");
            Cookies.set("accessToken", response.data.accessToken);
          });
      } catch (error) {
        console.error(error);
      }
    }
  };
  return {
    user,
    eventHandle,
    loginButton,
  };
};

export default useLogin;
