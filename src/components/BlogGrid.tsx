import React from "react";
import "@components/BlogGrid.css"; // External CSS for the styles

export const BlogGrid = ({ children }) => {
	return <div className="blog-grid">{children}</div>;
};
