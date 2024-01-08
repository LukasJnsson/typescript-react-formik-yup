

export interface ISubscribeFormValues {
    firstName: string;
    lastName: string;
    email: string;
    acceptedTerms: boolean;
    preferredTechnology: string;
};


interface ICustomFormProps {
    label: string;
};


export interface ICustomInputProps extends ICustomFormProps {
    placeholder: string;
};


export interface ISelectOption {
    value: string,
    label: string
};
export interface ICustomSelectProps extends ICustomFormProps {
    options: ISelectOption[];
};


export interface ICustomCheckboxProps extends ICustomFormProps {
    
};