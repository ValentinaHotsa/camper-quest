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
`;
export const ContainerInfo = styled.div`
  padding-left: 24px;
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
`;
export const RevLocWraper = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 8px;
`;
export const Rating = styled.p`
  color: rgb(16, 24, 40);
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  text-decoration-line: underline;
  svg {
    width: 16px;
    height: 16px;
    fill: #ffc531;
    stroke: #ffc531;
  }
`;
export const Location = styled.p`
  color: rgb(16, 24, 40);

  font-family: Inter;

  font-size: 16px;

  font-weight: 400;

  line-height: 24px;

  letter-spacing: 0%;

  margin: 0;
  text-align: left;
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
export const ImgList = styled.ul``;
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
export const ImgContainer = styled.div``;
export const ImgPrewiev = styled.img`
  width: 290px;

  height: 310px;
  border-radius: 10px;
  object-fit: cover;
  object-position: center;
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
  }
  svg {
    width: 20px;
    height: 20px;
    fill: transparent;
    stroke: #101828;
  }
`;
