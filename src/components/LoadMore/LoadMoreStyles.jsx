import styled from "@emotion/styled";
import { theme } from "../../styles/root";

export const LoadMore = styled.button`
  border: 1px solid rgba(71, 84, 103, 0.2);
  border-radius: 200px;
  color: ${theme.colors.black};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  width: 145px;
  height: 56px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  &:hover {
    border: 1px solid ${theme.colors.red};
  }
`;
