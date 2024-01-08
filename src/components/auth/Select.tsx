
import { useField, FieldHookConfig } from 'formik';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import JoySelect from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { ICustomSelectProps } from '../../types/interface';


export default function Select({ label, options, ...props }: ICustomSelectProps & FieldHookConfig<string>) {

  const [field, meta, helpers] = useField(props);

  const handleChange = (event: any, value: string | null): void => {
    helpers.setValue(String(value));
  };

  return (
    <FormControl className="form-element">
      <FormLabel htmlFor={props.name}>{label}</FormLabel>
        <JoySelect id={props.name} name={field.name} value={field.value} onChange={handleChange}>
          {options.map(({ value, label }) => (
            <Option key={value} value={value}>{label}</Option>
          ))}
        </JoySelect>
        {meta.touched && meta.error && <div className='formik-error'>{meta.error}</div>}
    </FormControl>
  );
};