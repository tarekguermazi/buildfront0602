import { Worker, Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import PropTypes from "prop-types";
import React, { useState } from "react";
function PDFPage(props) {
	const { pdf } = props;
	const [url, seturl] = useState(pdf);

	return (
		<div style={{ maxHeight: "750px", overflowY: "scroll" }}>
			{url ? (
				<div
					style={{
						border: "1px solid rgba(0, 0, 0, 0.3)",
						height: "100%",
					}}>
					<Viewer fileUrl={url} />
				</div>
			) : (
				<div
					style={{
						alignItems: "center",
						border: "2px dashed rgba(0, 0, 0, .3)",
						display: "flex",
						fontSize: "2rem",
						height: "100%",
						justifyContent: "center",
						width: "100%",
					}}>
					Not pdf Found
				</div>
			)}
		</div>
	);
}
PDFPage.propTypes = {
	pdf: PropTypes.string,
};
export default PDFPage;
