import React, { ReactNode } from "react";
import * as Yup from "yup";
import {
	Formik,
	FormikValues,
	FormikFormProps,
	FormikHelpers,
	Form as FormikForm,
	FormikProps,
	FormikConfig,
	FormikBag,
} from "formik";

import FormField, { FormFieldProps } from "./Field";

export interface FormCompositionProps {
	Field: React.FC<FormFieldProps>;
}

export interface FormProps extends FormikConfig<FormikValues> {
	initialValues: FormikValues;
	validationSchema?: Yup.Schema<any> | (() => Yup.Schema<any>);
	onSubmit: (
		values: FormikValues,
		formikHelpers: FormikHelpers<FormikValues>
	) => void | Promise<any>;
	onReset?: (
		values: FormikValues,
		formikHelpers: FormikHelpers<FormikValues>
	) => void | Promise<any>;
	enableReinitialize?: boolean;
	children?:
		| ReactNode
		| ReactNode[]
		| ((props: FormikProps<FormikValues>) => ReactNode | ReactNode[]);
}

const Form = ({
	initialValues,
	validationSchema,
	onSubmit,
	onReset,
	children,
	enableReinitialize = false,
	...props
}: FormProps & Partial<FormCompositionProps>) => {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
			onReset={onReset}
			enableReinitialize={enableReinitialize}
		>
			{(formikProps) => (
				<FormikForm noValidate {...props}>
					{typeof children === "function"
						? children(formikProps)
						: children}
				</FormikForm>
			)}
		</Formik>
	);
};

Form.Field = FormField;

export default Form;
