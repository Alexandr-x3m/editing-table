import { Button } from "@mui/base";
import { FieldInputProps, FieldProps } from "formik";
import { HTMLAttributes, InputHTMLAttributes } from "react";
import Dropzone, { DropzoneRootProps } from "react-dropzone";

interface FropZoneFileProps extends Partial<FieldProps> {
	// value: InputHTMLAttributes<HTMLInputElement>;
}

const DropzoneFile = ({ ...props }: FropZoneFileProps)  => {
	return (
		<Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
			{({ getRootProps, getInputProps }) => (
				<section>
					<div {...getRootProps()}>
						<input {...getInputProps()} {...props.field} ></input>
						<Button>
							Drag 'n' drop some files here, or click to select
							files
						</Button>
					</div>
				</section>
			)}
		</Dropzone>
	);
};

export default DropzoneFile;
