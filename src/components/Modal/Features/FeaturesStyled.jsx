import styled from "@emotion/styled";
import { theme } from "../../../styles/root";

export const FeaturesTab = styled.div``;

export const LeftWrap = styled.div`
  width: 430px;
`;

export const FeaturesList = styled.ul`
  // width: 430px;
  // height: 250px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  li {
    display: flex;
    gap: 8px;
    padding: 12px 18px 12px 18px;
    border-radius: 100px;
    background: ${theme.colors.lightGray};
    height: 44px;
    color: ${theme.colors.black};
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: transparent;
    stroke: ${theme.colors.black};
  }

  @media screen and (min-width: 768px) {
    width: 430px;
    height: 250px;
    li {
      font-size: 12px;
    }
  }
`;

export const TitleDetail = styled.h3`
  color: ${theme.colors.black};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-top: 17px;
`;

export const DetailsList = styled.ul`
  border-top: 1px solid rgba(16, 24, 40, 0.1);
  color: ${theme.colors.black};
  margin-top: 14px;
  padding-top: px;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;

  li {
    display: flex;
    justify-content: space-between;
    padding-top: 14px;
  }

  span {
    text-transform: capitalize;
  }
`;
