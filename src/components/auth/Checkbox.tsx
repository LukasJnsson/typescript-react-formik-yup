
import { useField, FieldHookConfig } from 'formik';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import JoyCheckbox from '@mui/joy/Checkbox';
import { ICustomCheckboxProps } from '../../types/interface';


export default function Checkbox({ label, ...props }: ICustomCheckboxProps & FieldHookConfig<string>) {

  const [field, meta] = useField({ ...props, type: 'checkbox' });

  return (
    <FormControl className="form-element">
      <JoyCheckbox {...field} label={<FormLabel>{label}</FormLabel>} />
      {meta.touched && meta.error && <div className='formik-error'>{meta.error}</div>}
    </FormControl>
  );
};