import { useState, useCallback } from "react";
import CONFIG from "src/config/config.json";
import axios from "axios";
import { errorToast, sucessToast } from "src/libs/toast/toast";
import { useNavigate } from "react-router-dom";
import { loginResponse } from "src/types/auth/login.type";
import cookie from "src/libs/cookie/cookie";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "src/constants/token/token.constants";

interface User {
  id: string;
  password: string;
}

const useLogin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>({
    id: "",
    password: "",
  });

  const eventHandle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setUser((prev) => ({ ...prev, [name]: value }));
    },
    [setUser],
  );

  const loginButton = async () => {
    if (user.id === "" && user.password === "") {
      alert("아이디 비밀번호를 입력해주세요");
    } else {
      try {
        await axios
          .post<loginResponse>(`${CONFIG.serverUrl}/auth/sign-in`, {
            id: user.id,
            password: user.password,
          })
          .then((response) => {
            sucessToast("로그인 성공");
            navigate("/check-student/first-grade");
            cookie.setCookie(ACCESS_TOKEN_KEY, response.data.accessToken);
            cookie.setCookie(REFRESH_TOKEN_KEY, response.data.refreshToken);
          });
      } catch (error) {
        errorToast("로그인 실패");
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
