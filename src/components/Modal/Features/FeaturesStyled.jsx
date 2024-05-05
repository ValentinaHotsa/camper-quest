import styled from "@emotion/styled";

export const FeaturesTab = styled.div`
  display: flex;
  margin-top: 44px;
  gap: 24px;
`;
export const LeftWrap = styled.div`
  width: 430px;
`;
export const FeaturesList = styled.ul`
  border: 3px solid rgb(228, 72, 72);
  width: 430px;
  height: 200px;
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
export const FormContainer = styled.form`
  padding: 24px;
  width: 448px;
  height: 532px;
  box-sizing: border-box;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
`;
