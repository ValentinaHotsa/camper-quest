import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import svg from "../../../assets/icons.svg";

import {
  TitleForm,
  SubtitleForm,
  Input,
  Button,
  StyledDatePicker,
  HiddenLabel,
  Error,
  InputField,
  TextareaField,
  FormStyle,
} from "./FormComponentStyled";
import { useState } from "react";

const FormComponent = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(15, "Too Long!")
      .required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    comment: Yup.string().min(10, "Too Short!").max(200, "Too Long!"),
    date: Yup.date()
      .nullable()
      .required("Booking date is required")
      .min(new Date(), "The booking date must be in the future"),
  });

  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date, form) => {
    console.log("Selected Date:", date);
    setSelectedDate(date);
    form.setFieldValue("date", date || "");
  };

  const initialValues = {
    name: "",
    email: "",
    date: null,
    comment: "",
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    resetForm();
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  };

  return (
    <>
      <TitleForm>Book your campervan now</TitleForm>
      <SubtitleForm>
        Stay connected! We are always ready to help you.
      </SubtitleForm>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnChange
        validateOnBlur
      >
        {({ isSubmitting }) => (
          <FormStyle as={Form}>
            <HiddenLabel htmlFor="name">Enter your name</HiddenLabel>
            <Field
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              as={InputField}
            />
            <Error name="name" component="div" />
            <HiddenLabel htmlFor="email">Enter your email</HiddenLabel>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              as={InputField}
            />
            <Error name="email" component="div" />

            <HiddenLabel htmlFor="date">Select booking date</HiddenLabel>
            <Field name="date">
              {({ field, form }) => (
                <>
                  <StyledDatePicker
                    selected={field.value}
                    id="date"
                    onChange={(date) => {
                      form.setFieldValue(field.name, date);
                      form.validateField(field.name);
                    }}
                    dateFormat="dd.MM.yyyy"
                    placeholderText="Booking date"
                    icon={
                      <svg>
                        <use href={`${svg}#icon-calendarH`}></use>
                      </svg>
                    }
                  />

                  {form.errors.date && form.touched.date && (
                    <Error name="date" component="div" />
                  )}
                </>
              )}
            </Field>
            <HiddenLabel htmlFor="comment">
              Write comment with details for us
            </HiddenLabel>
            <Field
              id="comment"
              name="comment"
              type="text"
              placeholder="Comment"
              rows="3"
              cols="3"
              as={TextareaField}
            />
            <ErrorMessage name="comment" component="div" />
            <Button type="submit" disabled={isSubmitting}>
              Send
            </Button>
          </FormStyle>
        )}
      </Formik>
    </>
  );
};

export default FormComponent;
