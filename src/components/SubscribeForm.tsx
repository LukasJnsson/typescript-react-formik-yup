
import { Formik, Form as FormikForm } from "formik";
import { ISelectOption, ISubscribeFormValues } from "../types/interface";
import subscribeValidationSchema from "../schemas/subscribe";
import Input from "./auth/Input";
import Select from "./auth/Select";
import Checkbox from "./auth/Checkbox";
import Submit from "./auth/Submit";


export default function SubscribeForm() {

  const technologies: ISelectOption[] = [
    { value: '', label: 'Select preferred technology' },
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'next', label: 'Next' }
  ];

  const subscribeFormValues: ISubscribeFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    preferredTechnology: '',
    acceptedTerms: false
  };

  return (
    <>
      <h1>Subscribe to our newsletter!</h1>
      <Formik 
        initialValues={subscribeFormValues}
        validationSchema={subscribeValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
          window.open('https://youtu.be/bqAhJcSQQG4?feature=shared&t=394', '_blank');
        }}
      >
        <FormikForm>
          <Input label="First Name" name="firstName" type="text" placeholder="Stanley" />
          <Input label="Last Name" name="lastName" type="text" placeholder="Hudson" />
          <Input label="Email" name="email" type="email" placeholder="stanley@theoffice.com" />
          <Select label="Preferred Technology" name="preferredTechnology" options={technologies}/>
          <Checkbox label="I accept the terms and conditions" name="acceptedTerms"/>
          <Submit />
        </FormikForm>
      </Formik>
    </>
  );
};