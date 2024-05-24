import styled from "@emotion/styled";
import { theme } from "../../styles/root";
import imgHero from "../../assets/hero/hero.jpg";

export const HomeSection = styled.main`
  flex-grow: 1;
  min-width: 320px;
`;

export const HeroContainer = styled.section`
  margin: 0 auto;
  background-color: ${theme.colors.gray};
  background-image: linear-gradient(
      to bottom,
      rgba(46, 47, 50, 0.1),
      rgba(46, 47, 66, 0.1)
    ),
    url(${imgHero});
  background-repeat: no-repeat;
  background-position: center center;
  padding: 5% 0 10% 0;
  background-size: cover;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    padding: 10% 0;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    padding: 8% 0;
  }
`;

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 700;
  line-height: 26px;
  width: 250px;
  margin: 0 auto;
  color: ${theme.colors.white};
  text-shadow: 1px 1px 23px rgba(200, 200, 200, 0.7);

  span {
    color: ${theme.colors.red};
    text-shadow: none;
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 600px;
    line-height: 62px;
    font-size: 54px;
  }
  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    width: 1000px;
    font-size: 64px;
    font-weight: 700;
    line-height: 72px;
    letter-spacing: -1.16px;
    max-width: 850px;
    max-width: 1440px;
  }
`;

export const Header = styled.header`
  font-size: 18px;
  padding: 18px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-size: 24px;
    padding: 22px 60px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    max-width: 1158px;
    margin: 0 auto;
  }
`;
export const Navigation = styled.ul`
  display: flex;
  gap: 15px;
  justify-content: center;

  a {
    color: ${theme.colors.gray};
  }
  & a:hover {
    color: ${theme.colors.red};
  }
  .active {
    color: ${theme.colors.red};
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    gap: 40px;
    justify-content: end;
  }
  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    gap: 40px;
    justify-content: end;
  }
`;

export const DescriptionSection = styled.section`
  max-width: 396px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${theme.colors.gray};
  margin: 0 auto;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    max-width: 768px;
  }
  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    max-width: 1440px;
    height: 500px;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    align-items: center;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    max-width: 1200px;
    align-items: center;
  }
`;

export const ImgThumb = styled.div`
  position: relative;
  width: 160px;
  height: 220px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 360px;
    height: 520px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    width: 360px;
    height: 520px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 70px;
  box-shadow: 0px 0px 40px -5px rgba(133, 133, 133, 1);

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    top: 70px;
    left: 20px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    top: 50px;
    left: 90px;
  }
`;
export const SubTitle = styled.h2`
  color: ${theme.colors.white};
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  padding: 20px;
  width: 190px;

  span {
    color: ${theme.colors.red};
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-size: 30px;
    line-height: 28px;
    padding: 50px;
    width: 450px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    font-size: 34px;
    line-height: 34px;
    padding: 50px;
    width: 600px;
  }
`;
