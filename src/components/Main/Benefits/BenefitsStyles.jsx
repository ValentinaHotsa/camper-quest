import styled from "@emotion/styled";
import { theme } from "../../../styles/root";

export const BenefitsSection = styled.section`
  margin: 60px 0;

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    padding: 80px 0;
  }
`;

export const BenefitsContainer = styled.div`
  min-width: 320px;
  max-width: 396px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    max-width: 768px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    max-width: 1158px;
  }
`;

export const BenefitsList = styled.ul`
  display: flex;
  gap: 50px;
  flex-direction: column;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: ${theme.colors.gray};

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 80px;
    font-size: 24px;
    width: 460px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    flex-wrap: nowrap;
    gap: 90px;
    width: 1050px;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;

  svg {
    width: 50px;
    height: 50px;
    fill: ${theme.colors.gray};
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    gap: 30px;
    width: 190px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    svg {
      width: 75px;
      height: 75px;
    }
  }
`;
