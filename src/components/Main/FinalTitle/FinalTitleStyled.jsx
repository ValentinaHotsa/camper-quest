import styled from "@emotion/styled";
import { theme } from "../../../styles/root";

export const Section = styled.section`
  padding-bottom: 120px;
  margin-top: 80px;
  margin-bottom: 120px;
  max-width: 396px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    max-width: 768px;
    margin-bottom: 60px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    max-width: 1158px;
  }
`;

export const Container = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    max-width: 900px;
  }
`;

export const Title = styled.h3`
  color: ${theme.colors.gray};
  font-size: 13px;
  font-weight: 600;
  text-align: left;
  width: 220px;
  display: flex;
  align-items: center;
  padding-bottom: 100px;
  padding-right: 10px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-size: 24px;
    width: 360px;
    padding-bottom: 180px;
    line-height: 30px;
  }
  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    font-size: 24px;
    line-height: 40px;
    width: 450px;
  }
`;

export const ImgThumb1 = styled.div`
  width: 160px;
  height: 250px;
  position: absolute;
  right: 100px;
  top: 180px;
  z-index: 2;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 250px;
    height: 320px;
    right: 200px;
    top: 250px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    right: 220px;
    top: 280px;
  }
`;

export const ImgThumb2 = styled.div`
  width: 170px;
  height: 280px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 360px;
    height: 480px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    width: 360px;
    height: 480px;
  }
`;

export const Image = styled.img`
  object-fit: fill;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 40px -5px rgba(133, 133, 133, 1);
  border-radius: 20px;
`;

export const ImgContainer = styled.div`
  display: flex;
  position: relative;
`;
