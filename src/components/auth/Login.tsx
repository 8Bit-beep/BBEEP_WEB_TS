import * as S from "./style";
import useLogin from "src/hooks/auth/useLogin";

const Login = () => {
  const { user, eventHandle, loginButton } = useLogin();
  return (
    <div>
      <S.Wrapper>
        <S.MainWrapper>
          <S.LoginImg />
          <S.LoginWrapper>
            <S.bbeepLogo />
            <S.subTitle>삑에 로그인</S.subTitle>
            <S.IdInput placeholder="아이디" onChange={eventHandle} value={user.id} name="id" />
            <S.PwInput
              placeholder="비밀번호"
              onChange={eventHandle}
              value={user.password}
              type="password"
              name="password"
            />
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
