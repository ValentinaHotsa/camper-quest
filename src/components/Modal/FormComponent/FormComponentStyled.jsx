import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
export const TitleForm = styled.h3`
  color: rgb(16, 24, 40);
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  margin-bottom: 8px;
`;
export const SubtitleForm = styled.h4`
  color: rgb(71, 84, 103);
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 24px;
`;
export const Input = styled.input`
  width: 364px;
  border-radius: 10px;
  border: none;
  padding: 18px;
  background: rgb(247, 247, 247);
  color: rgb(16, 24, 40);
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0%;
`;
export const Textarea = styled.textarea`
  width: 364px;
  height: 78px;
  border-radius: 10px;
  border: none;
  padding: 18px;
  background: rgb(247, 247, 247);
  color: rgb(16, 24, 40);
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  resize: none;
`;
export const Button = styled.button`
  width: 160px;
  height: 56px;
  border-radius: 200px;
  background: rgb(228, 72, 72);
  color: rgb(255, 255, 255);
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  border: none;
  margin-top: 10px;
  &:hover {
    background: rgb(216, 67, 67);
  }
`;
