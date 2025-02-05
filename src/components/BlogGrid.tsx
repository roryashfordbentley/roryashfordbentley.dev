import React from "react";
import "@components/BlogGrid.module.css"; // External CSS for the styles

export const BlogGrid = ({ children }) => {
	return <div className={styles["blog-grid"]}>{children}</div>;
};
