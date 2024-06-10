import styled from "styled-components";

export const HeaderWrap = styled.div`
  width: 100vw;
  height: 100px;

  background: #323a45;

  display: flex;

  justify-content: space-evenly;
  align-items: center;

  img {
    width: 120px;
  }
`;

export const SearchInputWrap = styled.div`
  width: 500px;
  height: 40px;

  background: white;

  display: flex;
  align-items: center;

  img {
    width: 25px;
    height: 25px;

    margin-left: 2%;
  }

  input {
    width: 88%;
    height: 90%;

    border: none;
    padding-left: 2%;

    &:focus {
      outline: none;
    }
  }
`;

export const ButtonWrap = styled.div`
  width: 300px;
  height: 40px;

  display: flex;

  gap: 30px;
`;

export const NavigationButton = styled.button<{ $isclicked: string }>`
  width: 140px;
  height: 40px;

  border: none;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  background: ${({ $isclicked }) => ($isclicked === "true" ? "#3CB0B8" : "#DDDDDD")};

  img {
    width: 20px;
    height: 20px;
  }
`;

export const ProfileWrap = styled.div`
  width: 200px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 70px;
    height: 70px;

    border: none;
    border-radius: 5px;
  }

  div {
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;

    margin-left: 10px;

    gap: 10px;
  }
  h4 {
    font-size: 20px;
    color: #fff;
    font-weight: 600;

    margin: 0;
  }

  h5 {
    font-size: 20px;
    color: #fff;
    font-weight: 400;

    margin: 0;
  }
`;
