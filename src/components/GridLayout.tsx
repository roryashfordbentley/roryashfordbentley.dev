//import type { Template } from "tinacms";
import { Children } from "react";

import "@components/GridLayout.css";

export const GridLayoutItem = ({ children, layout }) => {
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
export const GridLayout = ({ children }) => {
	return <div className="grid-layout">{children}</div>;
};
