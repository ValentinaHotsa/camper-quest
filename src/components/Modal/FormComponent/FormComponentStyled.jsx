import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ErrorMessage, Form } from "formik";
import DatePicker from "react-datepicker";
import { theme } from "../../../styles/root";

export const SweetAlertStyles = css`
  .swal-button {
    padding: 7px 19px;
    border-radius: 200px;
    background-color: ${theme.colors.red};
    font-size: 12px;
    border: none;
    color: ${theme.colors.white};
    box-shadow: none;
  }

  .swal-button:not([disabled]):hover,
  .swal-button:focus,
  .swal-button:active {
    background-color: ${theme.colors.redHover};
    border: none;
    box-shadow: none;
  }
`;
export const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;

  .react-datepicker {
    background-color: ${theme.colors.white};
    width: 325px;
    padding: 16px;
    border: 1px solid rgba(16, 24, 40, 0.2);
    border-radius: 12px;
  }

  .react-datepicker__header {
    background-color: ${theme.colors.white};
    border-bottom: none;
    padding: 0;
  }

  .react-datepicker__month {
    width: 293px;
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
    color: ${theme.colors.gray};
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
    border-color: ${theme.colors.black};
    border-radius: 15%;
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
  .react-datepicker__calendar-icon {
    right: 5px;
    top: 12px;
  }
  .react-datepicker__view-calendar-icon input {
    padding: 18px;
  }
`;

export const Error = styled(ErrorMessage)`
  font-family: Inter;
  color: red;
  position: absolute;
  font-size: 14px;
  right: 8px;
  top: 37px;
  @media screen and (min-width: 550px) {
    right: 48px;
    top: 20px;
  }
`;

export const TitleForm = styled.h3`
  color: ${theme.colors.black};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  margin-bottom: 8px;
`;

export const SubtitleForm = styled.h4`
  color: ${theme.colors.gray};
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
  width: 202px;
  border-radius: 10px;
  border: none;
  padding: 18px;
  background: ${theme.colors.white};
  color: ${theme.colors.black};
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0%;
  outline: none;

  @media screen and (min-width: 550px) {
    width: 400px;
  }
`;

export const TextareaField = styled.textarea`
  width: 202px;
  height: 114px;
  border-radius: 10px;
  border: none;
  padding: 18px;
  background: ${theme.colors.white};
  color: ${theme.colors.black};
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  outline: none;
  resize: none;
  @media screen and (min-width: 550px) {
    width: 400px;
  }
`;

export const Button = styled.button`
  height: 56px;
  border-radius: 200px;
  background: ${theme.colors.red};
  color: ${theme.colors.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  border: none;
  margin-top: 6px;
  @media screen and (min-width: 550px) {
    width: 160px;
  }

  &:hover {
    background: ${theme.colors.redHover};
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  border-radius: 4px;
  background: ${theme.colors.white};
  width: 202px;
  border-radius: 10px;
  border: none;
  padding: 18px;
  color: ${theme.colors.black};
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  outline: none;
  @media screen and (min-width: 550px) {
    width: 400px;
  }
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
