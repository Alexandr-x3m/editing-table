import { ReactNode } from "react";

const PageWrapper = ({ children }: { children: ReactNode; }) => {
	return (
		<div
			style={{
				position: "relative",
				maxWidth: "1100px",
				margin: "0 auto",
			}}
		>
			<h1
				style={{
					marginBottom: '32px',
				}}
			>
				Title page
			</h1>
            <div>
                {children}
            </div>
		</div>
	);
};

export default PageWrapper;
