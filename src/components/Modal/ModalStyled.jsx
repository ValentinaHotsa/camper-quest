import styled from "@emotion/styled";
import { theme } from "../../styles/root";

export const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  transition: opacity 0.3s;
  // overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 90vw;
  position: absolute;
  overflow: auto;
  border-radius: 20px;
  padding: 20px;
  background-color: white;
  scrollbar-color: transparent transparent;
  scrollbar-width: none;
  border: 1px solid rgba(255, 255, 255, 0.5);
  max-height: 90vh;

  @media screen and (min-width: 500px) {
    max-width: 982px;
    padding: 40px;
  }
`;

export const CloseButton = styled.button`
  display: block;
  border: none;
  background-color: transparent;
  padding: 0px;
  cursor: pointer;
  text-align: center;
  width: 32px;
  height: 32px;

  svg {
    width: 32px;
    height: 32px;
  }
`;

export const TopWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleCard = styled.h2`
  color: rgb(16, 24, 40);
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: left;
  margin: 6px 0;
  @media screen and (min-width: 500px) {
    font-size: 24px;
  }
`;

export const RevLocWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
  @media screen and (min-width: 500px) {
    flex-direction: row;
    gap: 18px;
  }
`;

export const Rating = styled.p`
  color: ${theme.colors.black};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  text-decoration-line: underline;

  svg {
    width: 16px;
    height: 16px;
    fill: ${theme.colors.yellow};
    stroke: ${theme.colors.yellow};
  }
`;

export const Location = styled.p`
  color: ${theme.colors.black};
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
    stroke: ${theme.colors.black};
  }
`;

export const Price = styled.div`
  color: ${theme.colors.black};
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: left;
  margin-top: 6px;

  svg {
    width: 20px;
    height: 20px;
    fill: transparent;
    stroke: ${theme.colors.black};
  }

  @media screen and (min-width: 500px) {
    font-size: 24px;
    margin-top: 24px;
  }
`;

export const ImgList = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ImgThumb = styled.div`
  max-height: 310px;

  img {
    width: 100%;
    height: 310px;
    border-radius: 20px;
    object-fit: cover;
    object-position: center;
  }
  @media screen and (min-width: 768px) {
    width: 290px;
    height: auto;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${theme.colors.gray};
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
  color: ${theme.colors.black};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  border: none;
  background-color: transparent;
  position: relative;

  ${({ active }) =>
    active &&
    `
    &:after{
     position:absolute;
     content: "";
     left: 0;
     bottom: 0;
     top: 48px;
     width: 100%;
     height: 5px;
     background-color: ${theme.colors.red};
    }
    `}
`;

export const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  gap: 24px;
  align-items: center;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    margin-top: 44px;
  }
`;

export const LeftWrap = styled.div`
  @media screen and (min-width: 768px) {
    width: 430px;
  }
`;

export const RightWrap = styled.div`
  padding: 24px;
  width: 250px;
  box-sizing: border-box;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;

  @media screen and (min-width: 550px) {
    width: 448px;
    height: 532px;
  }
`;

export const activeTabStyle = styled`
  border-bottom: 3px solid rgba(16, 24, 40, 0.2);

`;
