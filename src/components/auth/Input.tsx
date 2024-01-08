
import { useField, FieldHookConfig } from 'formik';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import JoyInput from '@mui/joy/Input';
import { ICustomInputProps } from '../../types/interface';


export default function Input({ label, placeholder, ...props }: ICustomInputProps & FieldHookConfig<string>) {

  const [field, meta] = useField(props);

  return (
    <FormControl className='form-element'>
      <FormLabel htmlFor={props.name}>{label}</FormLabel>
        <JoyInput variant='soft' id={props.name} {...field} type={props.type} placeholder={placeholder} />
        {meta.touched && meta.error && <div className='formik-error'>{meta.error}</div>}
    </FormControl>
  );
};