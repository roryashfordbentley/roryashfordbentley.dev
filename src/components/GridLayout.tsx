import "@components/GridLayout.css";

interface Props {
	children?: React.ReactNode;
	layout?: String;
}

export const GridLayoutItem = ({ children, layout }: Props) => {
	let gridItemClassName = "grid-layout__item";

	if (layout == "full") {
		gridItemClassName = `${gridItemClassName} ${gridItemClassName}--full`;
	} else if (layout == "narrow") {
		gridItemClassName = `${gridItemClassName} ${gridItemClassName}--narrow`;
	}

	return <div className={gridItemClassName}>{children}</div>;
};

/**
 * GridLayout
 *
 */
export const GridLayout = ({ children }: Props) => {
	return <div className="grid-layout">{children}</div>;
};
