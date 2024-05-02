import styled from "@emotion/styled";
import { theme } from "../../styles/root";
import imgHero from "../../assets/hero/hero.jpg";

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
  background-image: linear-gradient(
      to bottom,
      rgba(46, 47, 50, 0.1),
      rgba(46, 47, 66, 0.1)
    ),
    url(${imgHero});
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
  color: ${theme.colors.white};
  text-shadow: 1px 1px 23px rgba(200, 200, 200, 0.7);
`;

export const Header = styled.header`
  padding: 22px 60px;

  font-size: 24px;
  font-family: Inter;
  // background-color: ${theme.colors.lightGray};
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

export const DescriptionSection = styled.section`
  background-color: ${theme.colors.gray};
  max-width: 1440px;
  height: 500px;

  // justify-content: center;
  //
`;

export const DescriptionContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;
export const ImgThumb = styled.div`
  width: 360px;

  height: 520px;
  position: relative;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 50px;
  left: 80px;
  box-shadow: 0px 0px 40px -5px rgba(133, 133, 133, 1);
`;
export const SubTitle = styled.h2`
  font-family: Inter;
  color: ${theme.colors.white};
  font-size: 34px;
  font-weight: 400;
  line-height: 34px;
  letter-spacing: -0.36px;
  text-align: left;
  width: 600px;
  padding: 50px;
  // align-self: flex-end;
`;
