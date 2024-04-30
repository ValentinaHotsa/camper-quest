import styled from "@emotion/styled";
import { theme } from "../../styles/root";
export const HomeSection = styled.main`
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  // margin-left: auto;
  // margin-right: auto;
  // padding-left: 16px;
  // color: ${theme.colors.black};
  // padding-right: 16px;
  // padding-top: 134px;
  // padding-bottom: 55px;
`;
export const HeroContainer = styled.section`
  background-color: ${theme.colors.gray};
  background-image: url("../../assets/hero/hero.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  max-width: 1440px;
  background-size: cover;
  margin: 0 auto;
  padding: 124px 0;
`;
export const Title = styled.h1`
  font-family: Inter;
  font-size: 64px;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: -1.16px;
  max-width: 850px;
  margin-bottom: 20px;
  // text-align: center;
  margin: 0 auto;
`;
export const SubTitle = styled.h2`
  font-family: Inter;
  font-size: 24px;
  font-weight: 400;
  line-height: 34px;
  letter-spacing: -0.36px;
  text-align: left;
  width: 900px;
  left: 111px;
`;
export const AboutContainer = styled.div`
  margin-top: 60px;
  margin-bottom: 100px;
  background-color: #e7ebfc;
  padding: 50px 80px;
`;
export const AboutTitle = styled.h3``;
export const BenefitsList = styled.ul`
  font-size: 15px;
  line-height: 1.8;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding-top: 25px;
  padding-bottom: 50px;
`;
export const FinalTitle = styled.h3``;

export const Header = styled.header`
  padding: 25px 60px;
  font-size: 35px;
  font-family: Inter;
  background-color: ${theme.colors.lightGray};
`;
export const Navigation = styled.ul`
  display: flex;
  gap: 40px;
  justify-content: end;
  a {
    color: ${theme.colors.black};
  }
  & a:hover {
    color: ${theme.colors.red};
  }
  .active {
    color: ${theme.colors.red};
  }
`;
