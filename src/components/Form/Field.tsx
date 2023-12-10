import { TextField, TextFieldProps } from "@mui/material";
import { Formik, Field, FieldProps, FieldConfig } from "formik";
import { FormControl } from "@mui/material";
import { Children, ReactNode, cloneElement, isValidElement } from "react";

export interface FormFieldProps extends FieldConfig {
	name: string; 
	children?: ReactNode;
	fieldConf?: TextFieldProps;
}

const FormField = ({ name, fieldConf, children }: FormFieldProps) => {
	return (
		<Field
			name={name}
			render={(props: FieldProps) => {
				{
					children ? (
						<>
							{Children.map(children, (child) => {
								if (isValidElement(child)) {
									return cloneElement(child, props);
								}
							})}
						</>
					) : (
						<TextField
							id="outlined-basic"
							label="Outlined"
							variant="outlined"
							{...fieldConf}
							{...props}
						/>
					);
				}
			}}
		/>
	);
};

export default FormField;
