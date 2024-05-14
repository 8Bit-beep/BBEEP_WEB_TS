import styled from "styled-components";
import backgoundImg from "src/assets/img/auth/LoginImg.svg";
import Img from "src/assets/img/auth/LoginMainImg.svg";
import Logo from "src/assets/img/auth/LoginLogo.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${backgoundImg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

export const MainWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1200px;
  height: 720px;

  align-self: center;

  background-color: white;
  box-shadow: 0px 4px 250px 0px rgba(0, 0, 0, 0.25);
`;
export const LoginImg = styled.div`
  width: 600px;
  height: 820px;
  background-image: url(${Img});
  background-repeat: no-repeat;
`;

export const LoginWrapper = styled.div`
  display: flex;
  width: 600px;
  height: 720px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const bbeepLogo = styled.div`
  display: flex;
  background-image: url(${Logo});
  width: 120px;
  height: 110px;
  background-repeat: no-repeat;
  margin-top: 40px;
`;

export const subTitle = styled.span`
  width: 120px;
  height: 120px;
  font-size: 20px;
  align-self: center;
`;

export const IdInput = styled.input`
  width: 415px;
  height: 60px;
  margin-bottom: 30px;
  border-radius: 10px;
  border: 0px;
  background-color: #dddee0;
  font-size: 15px;
  padding-left: 35px;
  outline: none;
`;

export const PwInput = styled.input`
  width: 415px;
  height: 60px;
  border-radius: 10px;
  background-color: #dddee0;
  border: 0px;
  font-size: 15px;
  padding-left: 35px;
  outline: none;
`;

export const LoginRememberWrapper = styled.div`
  display: flex;
  width: 100px;
  height: 20px;
  margin-right: 350px;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const LoginRemember = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const LoginButtonWrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 150px;

`

export const LoginButton = styled.button`
  width: 450px;
  height: 60px;
  font-size: 15px;
  background-color: #303a46;
  border-radius: 10px;
  margin-top: 30px;
  color: white;
  font-size: 15px;
`;

export const NavSignIn = styled.span`
  font-size: 15px;
  color: #acadae;
  margin-left: 300px;
  margin-top: 10px;
  cursor: pointer;
`;
