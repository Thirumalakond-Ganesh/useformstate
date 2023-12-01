import React from "react";
import { useForm, useFormState, FormProvider } from "react-hook-form";
import './App.css'
const MyForm = () => {
  const methods = useForm();
  const { handleSubmit, register } = methods;
  const { dirty, isSubmitting, isValidating, submitCount } = useFormState();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="inputA">Input A</label>
      <input {...register("inputA", { required: true })} />

      <label htmlFor="inputB">Input B</label>
      <input {...register("inputB", { required: true })} />

      <p>Form State:</p>
      <ul>
      <li>Dirty: {dirty !== undefined ? dirty.toString() : "N/A"}</li>
        <li>Is Submitting: {isSubmitting !== undefined ? isSubmitting.toString() : "N/A"}</li>
        <li>Is Validating: {isValidating !== undefined ? isValidating.toString() : "N/A"}</li>
        <li>Submit Count: {submitCount !== undefined ? submitCount : "N/A"}</li>
      </ul>

      <button type="submit">Submit</button>
    </form>
  );
};

const App = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <MyForm />
    </FormProvider>
  );
};

export default App;
