import config from "@content/config/config.json";
import styles from "./MainNav.module.css";

function isActiveNav(link: string) {
	/*const pathname = Astro.url.pathname.replace(import.meta.env.BASE_URL, "");
	const subpath = pathname.match(/[^\/]+/g);

	if (link === pathname || link === "/" + (subpath?.[0] || "")) {
		return true;
	}

	return false;*/

	/**
	 * Todo: refactor for NextJS
	 */

	return false;
}

export const MainNav = () => {
	return (
		<nav className={styles["main-nav"]}>
			<ul className={styles["main-nav__list"]}>
				{config.nav.map((item, i) => (
					<li key={`nav+${i}`} className={styles["main-nav__list-item"]}>
						<a
							className={
								isActiveNav(item.link)
									? `${styles["main-nav__link"]} ${styles["main-nav__link--active"]}`
									: styles["main-nav__link"]
							}
							href={item.link}
						>
							{item.title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};
