import styled from "@emotion/styled";
import { theme } from "../../../styles/root";

export const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ReviewTab = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const LoginWraper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background-color: ${theme.colors.lightGray};
  color: ${theme.colors.red};
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserName = styled.h3`
  color: ${theme.colors.black};
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
`;

export const ReviewText = styled.p`
  color: ${theme.colors.gray};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const StarFilled = styled.svg`
  width: 16px;
  height: 16px;
  fill: ${theme.colors.yellow};
  stroke: ${theme.colors.yellow};
`;

export const StarEmpty = styled.svg`
  width: 16px;
  height: 16px;
  fill: ${theme.colors.gray};
  stroke: ${theme.colors.gray};
`;

export const StarIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: ${({ filled }) =>
    filled ? `${theme.colors.yellow}` : `${theme.colors.lightGray}`};
  stroke: ${({ filled }) =>
    filled ? `${theme.colors.yellow}` : `${theme.colors.lightGray}`};
`;
