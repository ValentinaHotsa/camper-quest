import styled from "@emotion/styled";
import { theme } from "../../styles/root";

export const FavoritesTitle = styled.h2`
  font-size: 35px;
  margin-top: 20px;
  margin-bottom: 48px;
  text-align: center;

  span {
    color: ${theme.colors.red};
  }
`;

export const FavoritesWrapper = styled.section`
  padding-bottom: 50px;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  a {
    color: ${theme.colors.red};
  }
  a:hover {
    color: ${theme.colors.redHover};
    text-decoration: underline;
  }
`;

export const FavoritesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 50px;
`;
