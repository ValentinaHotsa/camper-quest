import styled from "@emotion/styled";
import { theme } from "../../styles/root";

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
  background: rgb(255, 255, 255);
  padding: 16px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    flex-direction: row;
    width: 700px;
    // height: 358px;
    padding: 24px;
    gap: 24px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    width: 888px;
    height: 358px;
  }
`;

export const ContainerInfo = styled.div`
  width: 248px;
  height: 310px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 350px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    width: 526px;
    height: 310px;
  }
`;

export const TopWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  gap: 10px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    justify-content: space-between;
    flex-direction: row;
    margin-top: 0;
  }
`;

export const TitleCard = styled.h2`
  color: ${theme.colors.black}
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  text-align: center;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 250px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 400px;
    text-align: left;
  }
`;

export const RevLocWraper = styled.div`
  display: flex;
  font-size: 14px;
  flex-direction: column;
  gap: 6px;
  margin-top: 15px;
  color: ${theme.colors.black};
  line-height: 24px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    flex-direction: row;
    gap: 18px;
    margin-top: 8px;
  }
`;
export const Rating = styled.div`
  display: flex;
  gap: 4px;
  text-decoration-line: underline;

  svg {
    width: 18px;
    height: 16px;
    fill: ${theme.colors.yellow};
    stroke: ${theme.colors.yellow};
  }
`;

export const Location = styled.div`
  color: ${theme.colors.black};
  margin: 0;
  display: flex;
  gap: 4px;
  outline: none;

  svg {
    width: 16px;
    height: 16px;
    fill: transparent;
    stroke: ${theme.colors.black};
  }
`;

export const PriceWrap = styled.div`
  display: flex;
  gap: 12px;
`;

export const Price = styled.div`
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: left;
`;

export const FavoriteButton = styled.button`
  border: none;
  background-color: transparent;

  svg {
    width: 20px;
    height: 20px;
    fill: transparent;
    stroke: ${theme.colors.black};
  }
`;

export const Description = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${theme.colors.gray};
  margin-top: 10px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    -webkit-line-clamp: 1;
    text-overflow: ellipsis;
    margin-top: 24px;
  }
`;

export const ImgContainer = styled.div`
  width: 248px;
  height: 275px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 260px;
    height: 305px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    width: 290px;
  }
`;

export const ImgPrewiev = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
  object-position: right;
`;

export const Button = styled.button`
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  background: ${theme.colors.red};
  color: ${theme.colors.white};
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  margin-top: 20px;
  width: 100%;
  height: 45px;
  border: none;
  &:hover {
    background: ${theme.colors.redHover};
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 166px;
    height: 56px;
    font-size: 16px;
    margin-top: 24px;
  }
`;

export const DetailsContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const DetailsList = styled.ul`
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  li {
    display: flex;
    gap: 8px;
    padding: 12px 18px 12px 18px;
    border-radius: 100px;
    background: ${theme.colors.lightGray};
    color: ${theme.colors.black};
    font-weight: 500;
    line-height: 20px;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: transparent;
    stroke: ${theme.colors.black};
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-size: 12px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    font-size: 16px;
  }
`;
