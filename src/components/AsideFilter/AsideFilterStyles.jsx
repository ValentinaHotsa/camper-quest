import styled from "@emotion/styled";
import { theme } from "../../styles/root";
export const AsideContainer = styled.aside`
  height: 800px;
`;
export const AsStick = styled.div`
  float: left;
  margin: 0 auto;
  top: 73px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
  }
  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    position: -webkit-sticky;
    position: sticky;
    width: 360px;
    margin: 0;
    height: 500px;
  }
`;
export const FormLocation = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
  width: 288px;

  label {
    color: rgba(16, 24, 40, 0.6);
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
  input {
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    border-radius: 10px;
    border: none;
    background: rgb(247, 247, 247);
    padding-left: 44px;
    padding-bottom:18px;
    padding-top:18px;
  outline:none;

  paddin}
  svg {
    width: 18px;
    height: 20px;
    fill: transparent;
    stroke: #101828;
    position: absolute;
    z-index: 1;
    top: 50px;
    left: 18px;
  }
   @media screen and (min-width: ${theme.breakpoint.tablet}) {

  width: 360px;

  }
`;

export const TitlePage = styled.h5`
  color: rgb(71, 84, 103);
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 14px;
`;
export const TitleList = styled.h6`
  color: rgb(16, 24, 40);
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 24px;
`;
export const Button = styled.button`
  width: 173px;
  height: 56px;
  padding: 16px 60px;
  border-radius: 200px;
  border: none;
  background: rgb(228, 72, 72);
  color: rgb(255, 255, 255);
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.5%;
  &:hover {
    background: rgb(216, 67, 67);
  }
`;
export const FormFilter = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  position: relative;
  border-top: 1px solid rgba(16, 24, 40, 0.1);
  margin-top: 24px;
  margin-bottom: 32px;
  padding-top: 24px;
  input {
    opacity: 0;
    position: absolute;
  }
`;
export const CheckboxWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;
  width: 110px;
  height: 95px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    border-color: rgb(216, 67, 67);
  }
  span {
    color: rgb(16, 24, 40);
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }
  svg {
    width: 32px;
    height: 32px;
    fill: transparent;
    stroke: #101828;
  }
`;
export const FormFilterRadio = styled.form`
  display: flex;

  gap: 10px;
  position: relative;
  border-top: 1px solid rgba(16, 24, 40, 0.1);
  margin-top: 24px;
  margin-bottom: 32px;
  padding-top: 24px;
  input {
    opacity: 0;
    position: absolute;
  }
`;
export const RadioWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 88px;
  height: 75px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  gap: 4px;
  cursor: pointer;
  &:hover {
    border-color: rgb(216, 67, 67);
  }
  span {
    color: rgb(16, 24, 40);

    font-size: 12px;
    font-weight: 500;
    line-height: 12px;
  }
  svg {
    width: 30px;
    height: 30px;
    fill: transparent;
    stroke: #101828;
  }
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 110px;
    height: 95px;
    gap: 8px;

    span {
      font-size: 16px;
      line-height: 20px;
    }
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;
