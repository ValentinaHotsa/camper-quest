import { useFormik } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import svg from "../../../assets/icons.svg";
import {
  Form,
  TitleForm,
  SubtitleForm,
  Input,
  Button,
  Textarea,
  CustomDatePicker,
  HiddenLabel,
} from "./FormComponentStyled";
import { useState } from "react";
const FormComponent = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      date: "",
      comment: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const [startDate, setStartDate] = useState("");
  return (
    <>
      <TitleForm>Book your campervan now</TitleForm>
      <SubtitleForm>
        Stay connected! We are always ready to help you.
      </SubtitleForm>
      <Form onSubmit={formik.handleSubmit}>
        <HiddenLabel for="name">Enter your name</HiddenLabel>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <HiddenLabel for="email">Enter your email</HiddenLabel>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <HiddenLabel for="date">Select booking date</HiddenLabel>
        <CustomDatePicker
          id="date"
          selected={formik.values.date}
          onChange={(date) => formik.setFieldValue("date", date)}
          dateFormat="dd.MM.yyyy"
          icon={
            <svg>
              <use href={`${svg}#icon-calendarH`}></use>
            </svg>
          }
          placeholderText="Booking date"
          className="custom-datepicker"
        />
        <HiddenLabel form="comment">
          Write comment with details for us
        </HiddenLabel>
        <Textarea
          id="comment"
          name="comment"
          type="text"
          placeholder="Comment"
          onChange={formik.handleChange}
          rows="3"
          cols="3"
          value={formik.values.comment}
        />
        <Button type="submit">Send</Button>
      </Form>
    </>
  );
};

export default FormComponent;
