import styled from "@emotion/styled";
import DatePicker from "react-datepicker";
import { ToastContainer, toast } from "react-toastify";

import { ErrorMessage, Form } from "formik";
import { theme } from "../../../styles/root";

export const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;

  .react-datepicker {
    background-color: white;
    width: 325px;
    padding: 16px;
    border: 1px solid rgba(16, 24, 40, 0.2);
    border-radius: 12px;
  }

  .react-datepicker__header {
    background-color: white;
    border-bottom: none;
    padding: 0;
  }

  .react-datepicker__month {
    width: 293px;
    // width: 0;
    text-align: center;
  }

  .react-datepicker__current-month {
    margin-bottom: 20px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
  }

  .react-datepicker__day-names {
    font-family: Inter;
    font-size: 12px;
    font-weight: 600;
    line-height: 120%;
    text-align: center;
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .react-datepicker__day-name {
    color: rgb(71, 84, 103);
  }

  .react-datepicker__week {
    display: flex;
    justify-content: space-between;
  }

  .react-datepicker__month-container {
    float: none;
  }
  .react-datepicker__day {
    transition: 0.7s;
  }
  .react-datepicker__day: hover {
    background-color: ${theme.colors.red};
    color: ${theme.colors.white};
  }

  .react-datepicker__day--selected {
    background-color: ${theme.colors.red};
    color: ${theme.colors.white};
  }
  .react-datepicker__navigation-icon::before {
    border-color: black;
    border-radius: 15%;
  }
  .react-datepicker__navigation-icon--previous {
  }

  .react-datepicker__navigation--previous {
    top: 20px;
  }

  .react-datepicker__navigation--next {
    top: 20px;
  }

  .react-datepicker__day--today {
    color: ${theme.colors.white};
    background-color: rgba(228, 72, 72, 0.63);
  }
`;

export const Error = styled(ErrorMessage)`
  font-family: Inter;
  color: red;
  position: absolute;
  font-size: 14px;

  right: 45px;
  top: 20px;
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
export const InputContainer = styled.div`
  margin-bottom: 14px;
  position: relative;
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
  margin-top: 6px;
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
  // margin-bottom: 14px;
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
