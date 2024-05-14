import { useState, useCallback } from "react";
import * as S from "./style";
import axios from "axios";
import CONFIG from "src/config/config.json";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

interface User {
  id: string;
  password: string;
}

const Login = () => {
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

  // const idEventhandle = (e : any) => {
  //   setId(e.target.value);
  // }

  // const pwEventhandle = (e: any) => {
  //   setPw(e.target.value);
  // };

  // const eventHandle = (e: any) => {
  //   setUser(e.target.value);
  // };

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

        // if (response.status === 201) {
        //   alert("로그인 성공");
        //   Cookies.set("accessToken", response.data.accessToken);
        // }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <S.Wrapper>
        <S.MainWrapper>
          <S.LoginImg />
          <S.LoginWrapper>
            <S.bbeepLogo />
            <S.subTitle>삑에 로그인</S.subTitle>
            <S.IdInput placeholder="아이디" onChange={eventHandle} value={user.id} name="id" />
            <S.PwInput placeholder="비밀번호" onChange={eventHandle} value={user.password} type="password" name="password"/>
            <S.LoginRememberWrapper>
              <S.LoginRemember type="checkbox" />
              <span>로그인 유지</span>
            </S.LoginRememberWrapper>
            <S.LoginButtonWrapper>
              <S.LoginButton onClick={loginButton}>로그인</S.LoginButton>
              <S.NavLostPassWord>비밀번호를 잊어버렸나요?</S.NavLostPassWord>
            </S.LoginButtonWrapper>
          </S.LoginWrapper>
        </S.MainWrapper>
      </S.Wrapper>
    </div>
  );
};

export default Login;
