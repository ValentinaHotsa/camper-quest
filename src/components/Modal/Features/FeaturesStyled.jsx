import styled from "@emotion/styled";

export const FeaturesTab = styled.div``;
export const LeftWrap = styled.div`
  width: 430px;
`;
export const FeaturesList = styled.ul`
  width: 430px;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  li {
    display: flex;
    gap: 8px;
    padding: 12px 18px 12px 18px;
    border-radius: 100px;
    background: rgb(242, 244, 247);
    height: 44px;
    color: rgb(16, 24, 40);
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }
  svg {
    width: 20px;
    height: 20px;
    fill: transparent;
    stroke: #101828;
  }
`;
export const TitleDetail = styled.h3`
  color: rgb(16, 24, 40);
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-top: 44px;
`;
export const DetailsList = styled.ul`
  border-top: 1px solid rgba(16, 24, 40, 0.1);
  color: rgb(16, 24, 40);
  margin-top: 24px;
  padding-top: 10px;
  font-family: Inter;
  font-size: 18px;

  font-weight: 500;

  line-height: 24px;
  li {
    display: flex;
    justify-content: space-between;
    padding-top: 14px;
  }
`;
