import styled from "@emotion/styled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ErrorMessage, Form } from "formik";

export const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Error = styled(ErrorMessage)`
  font-family: Inter;
  color: red;
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
export const InputField = styled.input`
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

  outline:none;
  }
`;
export const TextareaField = styled.textarea`
  width: 364px;
  height: 114px;
  border-radius: 10px;
  border: none;
  padding: 18px;
  background: rgb(247, 247, 247);
  color: rgb(16, 24, 40);
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  outline: none;
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

export const StyledDatePicker = styled(DatePicker)`
  border-radius: 4px;
  background: rgb(247, 247, 247);
  width: 364px;
  border-radius: 10px;
  border: none;
  padding: 18px;
  color: rgb(16, 24, 40);
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  outline: none;
`;
export const HiddenLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;
