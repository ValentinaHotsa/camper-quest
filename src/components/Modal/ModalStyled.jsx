import styled from "@emotion/styled";
export const Popup = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);
  transition: opacity 0.3s;
  overflow: auto;
  padding: 70px 0;
`;
export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 982px;
`;
export const ModalContent = styled.div`
  padding: 40px;

  height: auto;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: white;
  backdrop-filter: blur(5px);
  transform: translateY(-50px);
  transition: opacity 0.3s, transform 0.3s;
  max-height: 90vh;
  overflow: auto;
`;
export const CloseButton = styled.button`
  // position: absolute;

  display: block;
  border: none;
  // background-color: transparent;
  padding: 0px;
  cursor: pointer;
  
    svg {
    width: 16px;
    height: 16px;
    // fill: #101828;
    // stroke: #101828;
  }
  }
`;

// export const ModalCard = styled.div``;
export const TopWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TitleCard = styled.h2`
  color: rgb(16, 24, 40);
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: left;
  margin: 6px 0;
`;
export const RevLocWraper = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 8px;
`;

export const Rating = styled.p`
  color: rgb(16, 24, 40);
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  text-decoration-line: underline;
  svg {
    width: 16px;
    height: 16px;
    fill: #ffc531;
    stroke: #ffc531;
  }
`;

export const Location = styled.p`
  color: rgb(16, 24, 40);
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0%;
  margin: 0;
  text-align: left;
  svg {
    width: 16px;
    height: 16px;
    fill: transparent;
    stroke: #101828;
  }
`;

export const Price = styled.div`
  color: rgb(16, 24, 40);
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: left;
  margin-top: 24px;
  svg {
    width: 20px;
    height: 20px;
    fill: transparent;
    stroke: #101828;
  }
`;

export const ImgList = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  img {
    width: 290px;
    height: 310px;
    border-radius: 10px;
    object-fit: cover;
    object-position: center;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: rgb(71, 84, 103);
  margin-top: 24px;
`;
export const TabWraper = styled.div`
  margin-top: 44px;
  display: flex;
  flex-direction: row;
  gap: 40px;
  border-bottom: 1px solid rgba(16, 24, 40, 0.2);
  padding-bottom: 24px;
`;
export const Button = styled.button`
  color: rgb(16, 24, 40);
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  width: 85px;
  height: 24px;
  border: none;
  background-color: transparent;
`;
