import styled from "@emotion/styled";

export const ContainerCard = styled.div`
  display: flex;
  width: 888px;
  height: 358px;
  box-sizing: border-box;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
  background: rgb(255, 255, 255);
  padding: 24px;
  gap: 24px;
`;
export const ContainerInfo = styled.div`
  // padding-left: 24px;
  width: 526px;
  height: 310px;
`;
export const TopWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TitleCard = styled.h2`
  color: rgb(16, 24, 40);
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: left;
  margin: 0;
  width: 400px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const RevLocWraper = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 8px;
`;
export const Rating = styled.div`
  color: rgb(16, 24, 40);
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration-line: underline;
  svg {
    width: 18px;
    height: 16px;
    fill: #ffc531;
    stroke: #ffc531;
  }
`;
export const Location = styled.div`
  color: rgb(16, 24, 40);
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  svg {
    width: 16px;
    height: 16px;
    fill: transparent;
    stroke: #101828;
  }
`;
export const Price = styled.div`
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: left;
  svg {
    width: 20px;
    height: 20px;
    fill: transparent;
    stroke: #101828;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: rgb(71, 84, 103);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 24px;
`;
export const ImgContainer = styled.div`
  width: 290px;
  height: 305px;
`;

export const ImgPrewiev = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  object-position: right;
`;
export const Button = styled.button`
  width: 166px;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  background: rgb(228, 72, 72);
  color: rgb(255, 255, 255);
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-top: 24px;
  border: none;
  &:hover {
    background: rgb(216, 67, 67);
  }
`;
export const DetailsContainer = styled.div``;
export const DetailsList = styled.ul`
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  li {
    display: flex;
    gap: 8px;
    padding: 12px 18px 12px 18px;
    border-radius: 100px;
    background: rgb(242, 244, 247);
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
