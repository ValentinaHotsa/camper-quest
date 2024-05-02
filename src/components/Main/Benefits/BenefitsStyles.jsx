import styled from "@emotion/styled";
import { theme } from "../../../styles/root";

export const BenefitsSection = styled.section`
  padding: 80px 0;
  margin: 60px 0;
`;
export const BenefitsContainer = styled.div`
  min-width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BenefitsList = styled.ul`
  display: flex;
  gap: 50px;
  font-family: Inter;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -1.16px;
  text-align: center;
  color: ${theme.colors.gray};
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  //   justify-content: center;
  align-items: center;

  svg {
    width: 75px;
    height: 75px;
    fill: ${theme.colors.gray};
  }
`;
