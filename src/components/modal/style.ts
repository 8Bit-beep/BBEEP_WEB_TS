import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.25);
`;

export const ModalWrapper = styled.div`
  display: flex;
  background: #f8f5f5;
  width: 1000px;
  height: 600px;
  border-radius: 20px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ModalTitle = styled.div`
  width: 200px;
  height: 60px;
  border-radius: 20px;
  display: flex;
  background-color: #3cb0b8;
  text-align: center;
  font-size: 25px;
  font-weight: 800;
  color: white;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

export const ModalListWrap = styled.div`
  width: 90%;
  height: 70%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 25px;
  overflow-y: scroll;
  justify-content: center;
  align-items: center;
`;

export const ModalListContent = styled.div`
  display: flex;
  width: 250px;
  height: 60px;
  background-color: #fff;
  box-shadow: 1px 1px 12px 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const ModalCancleButton = styled.button`
  position: absolute;
  right: 45%;
  top: 1%;
  position: relative;
  border: none;
  background: transparent;

  img {
    border: none;
    border-radius: 15px;
    background: transparent;
  }
`;
