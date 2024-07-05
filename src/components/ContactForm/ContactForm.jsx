import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup";
import { nanoid } from "nanoid";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, "name must be at least 3 characters").max(50, "you reached the max number of characters").required(),
  number: Yup.number().required(),
})

export default function ContactForm({onAdd}) {

  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.name.trim(),
      number: values.number.trim(),
    });
    actions.resetForm();
  };

  return (
    <Formik initialValues={{
      name: "",
      number: "",
    }} onSubmit={handleSubmit}
    validationSchema={FeedbackSchema}>
      <Form> 
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId}></Field>
          <ErrorMessage name="name" component="span"/>
        </div>
        <div>
          <label htmlFor={numberFieldId}>Number</label>
          <Field type="tel" name="number" id={numberFieldId}></Field>
          <ErrorMessage name="number" component="span"/>
        </div>
      <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}