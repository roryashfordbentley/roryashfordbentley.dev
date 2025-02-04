import "@components/LinkButton.css";

export const LinkButton = (props) => {
	let linkClassName = "link-button";

	if (props.variant == "x") {
		linkClassName = `${linkClassName} ${linkClassName}--x`;
	}

	return (
		<a className={linkClassName} href={props.href}>
			{props.title}
		</a>
	);
};
