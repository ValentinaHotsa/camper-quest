import { useFormik } from "formik";
import {
  Form,
  TitleForm,
  SubtitleForm,
  Input,
  Button,
  Textarea,
} from "./FormComponentStyled";
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
  return (
    <>
      <TitleForm>Book your campervan now</TitleForm>
      <SubtitleForm>
        Stay connected! We are always ready to help you.
      </SubtitleForm>
      <Form onSubmit={formik.handleSubmit}>
        <label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </label>

        <label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </label>

        <label>
          <Input
            id="date"
            name="date"
            type="text"
            placeholder="Booking date"
            onChange={formik.handleChange}
            value={formik.values.date}
          />
        </label>
        <label>
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
        </label>

        <Button type="submit">Send</Button>
      </Form>
    </>
  );
};

export default FormComponent;
