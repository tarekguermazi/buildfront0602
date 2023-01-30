import { Worker, Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import React, { useState } from "react";
function PDFPage() {
	const [url, seturl] = useState(
		"http://178.79.177.14:8080/api/file/download?privateUrl=tenant/6368fcb72fdd40001e4da469/publication/supports/5ec5b61f-1d9e-4044-a16c-7009c532fff1.pdf",
	);

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
					Preview area
				</div>
			)}
		</div>
	);
}

export default PDFPage;
