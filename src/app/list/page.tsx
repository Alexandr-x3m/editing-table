"use client";
import { Grid, TextField } from "@mui/material";
import { FieldProps } from "formik";
import Form from "src/components/Form";
import PageWrapper from "src/components/PageWrapper";
import DropzoneFile from "src/components/Dropzone";

const GetYouDiplomPage = () => {
	return (
		<PageWrapper>
			<Form
				initialValues={{
					name: "",
					position: "",
				}}
				onSubmit={() => {
					console.log("onSubmit");
				}}
			>
				<Grid container columns={1} spacing={2}>
					<Form.Field
						name="name"
						fieldConf={{
							label: "Имя",
							id: "outlined-basic",
							variant: "outlined",
							key: "test",
						}}
					/>
					<Form.Field name="file">
						<DropzoneFile />
					</Form.Field>
				</Grid>
			</Form>
		</PageWrapper>
	);
};

export default GetYouDiplomPage;
