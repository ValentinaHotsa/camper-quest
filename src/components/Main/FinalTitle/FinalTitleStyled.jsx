import styled from "@emotion/styled";
import { theme } from "../../../styles/root";

export const Section = styled.section`
  padding: 120px 0;
  margin-top: 60px;
  margin-bottom: 120px;
`;

export const Container = styled.div`
  display: flex;
  max-width: 900px;
  margin: 0 auto;
  justify-content: space-between;

  //   padding: 150px 0;
  //   height: 800px;
`;

export const Title = styled.h3`
  font-family: Inter;
  color: ${theme.colors.gray};
  font-size: 42px;
  font-weight: 500;
  line-height: 42px;
  letter-spacing: -0.36px;
  text-align: left;
  width: 350px;
  //   height: 500px;
  padding-top: 110px;
`;

export const ImgThumb1 = styled.div`
  width: 250px;
  height: 320px;
  position: absolute;
  right: 220px;
  top: 280px;
  z-index: 2;
`;

export const ImgThumb2 = styled.div`
  width: 360px;
  height: 480px;
`;

export const Image = styled.img`
  object-fit: fill;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 40px -5px rgba(133, 133, 133, 1);
`;
export const ImgContainer = styled.div`
  display: flex;
  position: relative;
`;
