import styled from "styled-components";

export const CheckClassWrap = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
`;

export const CheckClassMain = styled.div`
  width: calc(100vw - 13vw);
  height: calc(100vh - 10vh);

  margin-top: 10vh;

  display: flex;
  flex-direction: row;
`;

export const SideBar = styled.div`
  width: 13%;
  height: 100%;

  background: #b2bdc6;

  display: flex;
  flex-direction: column;
`;

export const ClassNumber = styled.span<{ $backgroundcolor: string }>`
  width: 100%;
  height: 8%;
  background: ${({ $backgroundcolor }) => ($backgroundcolor === "true" ? "#3CB0B8" : "transparent")};

  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;

  color: #fff;
  font-family: Inter;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

export const SelectClassImgWrap = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;

  justify-content: space-around;

  cursor: pointer;
`;

export const ViewInfomationWrap = styled.div`
  width: 100%;
  height: 100%;

  overflow-y: auto;
`;

export const ViewInfoUtilityWrap = styled.div`
  width: 100%;
  height: 7%;

  display: flex;
  flex-direction: row;

  border-top: 1px solid #adadad;
  border-bottom: 1px solid #adadad;
  align-items: center;
  align-self: center;

  justify-content: space-around;

  span {
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const ViewInfoStudentWrap = styled.div<{ $isclicked: string }>`
  width: 100%;
  height: 7%;

  display: flex;
  flex-direction: row;

  border-bottom: 1px solid #adadad;
  align-items: center;
  align-self: center;

  span {
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  background: ${({ $isclicked }) => ($isclicked === "true" ? "#3CB0B8" : "transparent")};
`;

export const ViewInfoStudentName = styled.span`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin-left: 10vw;
`;

export const ViewInfoStudentClassNumber = styled.span`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin-left: 19.5vw;
`;

export const ViewinfoStudentFloor = styled.span`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin-left: 21vw;
`;

export const ViewInfoStudentClass = styled.span`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin-left: 19vw;
`;
