
import * as Yup from 'yup';


const subscribeValidationSchema = Yup.object({
    firstName: Yup.string()
        .max(20, 'Please enter name with maximum 20 characters!')
        .required('Please enter first name!'),
    lastName: Yup.string()
        .max(20, 'Please last name with maximum 25 characters!')
        .required('Pleanse enter last name!'),
    email: Yup.string()
        .email('Please enter valid email address!')
        .required('Please enter email address!'),
    acceptedTerms: Yup.boolean()
        .required('Please accept terms!')
        .oneOf([true], 'Please accept the terms and conditions!'),
    preferredTechnology: Yup.string()
        .oneOf(['react', 'angular', 'vue', 'next'])
        .required('Please select preferred technology!')
});


export default subscribeValidationSchema;