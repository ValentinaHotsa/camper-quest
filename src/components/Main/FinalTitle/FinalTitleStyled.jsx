import styled from "@emotion/styled";
import { theme } from "../../../styles/root";

export const Section = styled.section`
  padding: 120px 0;
  margin-top: 60px;
  margin-bottom: 120px;
  max-width: 396px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    max-width: 768px;
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

  //   padding: 150px 0;
  //   height: 800px;
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
  }
  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    max-width: 900px;
  }
`;

export const Title = styled.h3`
  color: ${theme.colors.gray};
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-align: left;
  width: 220px;
  padding-top: 50px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-size: 34px;
    padding-top: 40px;
    width: 360px;
    line-height: 40px;
  }
  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    font-size: 42px;
    line-height: 44px;
    width: 500px;
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
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
  }
  @media screen and (min-width: ${theme.breakpoint.desktop}) {
  }
`;
export const ImgContainer = styled.div`
  display: flex;
  position: relative;
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
  }
  @media screen and (min-width: ${theme.breakpoint.desktop}) {
  }
`;
