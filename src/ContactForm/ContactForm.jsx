import { Formik, Form, Field } from "formik"
import { nanoid } from "nanoid";

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
    }}  onSubmit={handleSubmit}>
      <Form> 
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" id={nameFieldId}></Field>
        <label htmlFor={numberFieldId}>Number</label>
        <Field type="tel" name="number" id={numberFieldId}></Field>
      <button type="submit">Add contact</button>
      </Form>
    </Formik>

  );
}