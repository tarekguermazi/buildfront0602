import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BreadcrumbNav = styled.div`
	margin: 28px 0 10px 0;
	.breadcrumb {
		width: 100%;
		margin: 0;
		padding: 0;
		background-color: transparent;
	}
	ol {
		display: flex;
	}
	li {
		font-family: "Proxima Nova";
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 25px;
	}
	.breadcrump__nav {
		margin: auto;
		left: 0;
		display: flex;
		max-width: 1170px;
		flex-direction: column;
	}

	.breadcrumb-item:not(.active) a {
		color: rgba(0, 0, 0, 0.45);
	}

	h2 {
		font-family: "Bebas Neue Pro";
		font-style: normal;
		font-weight: 700;
		font-size: 47px;
		line-height: 39px;
	}
`;

function Breadcrumb(props) {
	const isLink = (item) => {
		return item.length > 1;
	};
	return (
		<BreadcrumbNav>
			<div className="breadcrump__nav">
				<div>
					<h2>{props.title}</h2>
				</div>
				<div>
					<ol className="breadcrumb">
						{props.items.map((item, index) => (
							<li
								key={item[0]}
								className={`breadcrumb-item ${
									props.items.length - 1 === index ? "active" : ""
								}`}>
								{isLink(item) ? (
									<Link to={item[1]}>
										{" "}
										{item[0]} {item[1]}
									</Link>
								) : (
									item[0]
								)}
							</li>
						))}
					</ol>
				</div>
			</div>
		</BreadcrumbNav>
	);
}

export default Breadcrumb;
