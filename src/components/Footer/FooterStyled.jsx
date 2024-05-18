import styled from "@emotion/styled";
import { theme, br } from "../../styles/root";

export const ContainerFooter = styled.footer`
  padding: 20px 0;

  background-color: ${theme.colors.gray};
  color: ${theme.colors.white};
  font-size: 18px;
  text-align: center;
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-size: 25px;
  }
`;

export const IconWrap = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  margin-top: 15px;
  a {
    width: 50px;
    height: 50px;
  }
  svg {
    width: 40px;
    height: 40px;
    fill: ${theme.colors.red};
  }
  svg:hover {
    fill: rgb(216, 67, 67);
    width: 43px;
    height: 43px;
  }
`;
