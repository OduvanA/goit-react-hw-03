import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css"

const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "name must be at least 3 characters")
    .max(50, "you reached the max number of characters")
    .required("Required"),
  number: Yup.string()
    .trim()
    .min(3, "phone number must be at least 3 characters")
    .max(50, "you reached the max number of characters")
    .required("Required"),
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
    validationSchema={ContactsSchema}>
      <Form className={css.container}> 
        <div>
          <label className={css.label} htmlFor={nameFieldId}>Name</label>
          <Field className={css.input} type="text" name="name" id={nameFieldId}></Field>
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div>
          <label className={css.label} htmlFor={numberFieldId}>Number</label>
          <Field className={css.input} type="tel" name="number" id={numberFieldId}></Field>
          <ErrorMessage className={css.error} name="number" component="span"/>          
        </div>
      <button className={css.button} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}