import React from "react";
import styles from "./BlogGrid.module.css"; // External CSS for the styles

export const BlogGrid = ({ children }) => {
	return <div className={styles["blog-grid"]}>{children}</div>;
};

export const BlogGridItem = ({ children }) => {
	return <div className={styles["blog-grid__item"]}>{children}</div>;
};
