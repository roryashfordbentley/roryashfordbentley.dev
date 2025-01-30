import { LinkButton } from "@components/LinkButton";
import "@components/ContactWidget.css";
import config from "../content/config/config.json";

export const ContactWidget = () => {
	return (
		<div className="contact-widget">
			<ul className="contact-widget__list">
				{config?.contactLinks?.map((link, index) => {
					return (
						<li className="contact-widget__list-item" key={index}>
							<a className="contact-widget__link" href={link.link}>
								<div
									className="contact-widget__icon"
									style={
										{
											"--mask": `url(${link.icon})`,
										} as React.CSSProperties
									}
								></div>
							</a>
						</li>
					);
				})}
			</ul>
			<LinkButton href="/" title="Contact" />
		</div>
	);
};
