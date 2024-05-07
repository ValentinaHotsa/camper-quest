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
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NameWraper = styled.div``;

export const UserName = styled.h3`
  color: ${theme.colors.black};
  font-family: Inter;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
`;

export const Rating = styled.div``;

export const ReviewText = styled.p`
  color: ${theme.colors.gray};
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;
