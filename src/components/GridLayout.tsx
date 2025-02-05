import styles from "@components/GridLayout.module.css";

interface Props {
	children?: React.ReactNode;
	layout?: String;
}

export const GridLayoutItem = ({ children, layout }: Props) => {
	let gridItemClassName = styles["grid-layout__item"];

	if (layout == "full") {
		gridItemClassName = `${styles["grid-layout__item"]} ${styles["grid-layout__item--full"]}`;
	} else if (layout == "narrow") {
		gridItemClassName = `${styles["grid-layout__item"]} ${styles["grid-layout__item--narrow"]}`;
	}

	return <div className={gridItemClassName}>{children}</div>;
};

/**
 * GridLayout
 *
 */
export const GridLayout = ({ children }: Props) => {
	return <div className={styles["grid-layout"]}>{children}</div>;
};
