import styled from "@emotion/styled";
import { theme } from "../../styles/root";

export const CatalogContainer = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  flex-direction: column;
  gap: 64px;
  justify-content: center;
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
  }
  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    flex-direction: row;
    gap: 64px;
    justify-content: center;
  }
`;