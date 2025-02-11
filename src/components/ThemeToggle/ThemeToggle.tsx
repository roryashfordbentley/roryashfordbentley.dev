"use client"; // Required for client-side rendering in Next.js

import { useState, useEffect, useCallback } from "react";

import styles from "./ThemeToggle.module.css";

const useTheme = () => {
	const [theme, setTheme] = useState<string>("light");

	useEffect(() => {
		if (typeof window !== "undefined") {
			const localStorageTheme = localStorage.getItem("theme") ?? "";

			if (["dark", "light"].includes(localStorageTheme)) {
				setTheme(localStorageTheme);
				document.documentElement.classList.toggle("dark", localStorageTheme === "dark");
			} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				setTheme("dark");
				document.documentElement.classList.add("dark");
			} else {
				document.documentElement.classList.remove("dark");
			}
		}
	}, []);

	const toggleTheme = useCallback(() => {
		setTheme((prevTheme) => {
			const newTheme = prevTheme === "dark" ? "light" : "dark";
			localStorage.setItem("theme", newTheme);
			document.documentElement.classList.toggle("dark", newTheme === "dark");
			return newTheme;
		});
	}, []);

	return { theme, toggleTheme };
};

const ThemeToggle = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			className={`${styles["theme-toggle"]} ${theme === "dark" ? styles["theme-toggle--dark"] : ""}`}
			id="themeToggle"
			type="button"
			role="switch"
			aria-checked={theme === "dark"}
			onClick={toggleTheme}
		>
			<span className={styles["theme-toggle__label"]}>Toggle light or dark mode</span>
			<span className={styles["theme-toggle__pseudo-button"]}></span>
			{theme === "dark" ? (
				<svg
					className={`${styles["theme-toggle__icon"]} ${styles["theme-toggle__icon--dark"]}`}
					width="46"
					height="46"
					viewBox="0 0 46 46"
				>
					<path
						d="M22.5981 3.21225C23.0548 2.84182 23.2187 2.2182 23.0033 1.67107C22.788 1.12394 22.2429 0.779467 21.6562 0.819748C10.0885 1.61408 0.952271 11.2476 0.952271 23.0162C0.952271 35.3042 10.9137 45.2656 23.2016 45.2656C34.672 45.2656 44.1135 36.5869 45.3207 25.437C45.384 24.8524 45.0612 24.2942 44.523 24.0574C43.9847 23.8207 43.3551 23.9601 42.9671 24.4019C40.2621 27.4811 36.2996 29.4214 31.8823 29.4214C23.7368 29.4214 17.1336 22.8182 17.1336 14.6727C17.1336 10.0465 19.262 5.91848 22.5981 3.21225Z"
						fill="black"
					></path>
				</svg>
			) : (
				<svg
					className={styles["theme-toggle__icon"]}
					width="58"
					height="64"
					viewBox="0 0 58 64"
				>
					<circle cx="29.3119" cy="32.0006" r="11.8689" fill="black"></circle>
					<path
						d="M29.3118 0.5C30.6168 0.5 31.6746 1.55784 31.6746 2.86275V12.3137C31.6746 13.6187 30.6168 14.6765 29.3118 14.6765C28.0069 14.6765 26.9491 13.6187 26.9491 12.3137V2.86275C26.9491 1.55784 28.0069 0.5 29.3118 0.5Z"
						fill="black"
					></path>
					<path
						d="M29.3118 49.3548C30.6168 49.3548 31.6746 50.4126 31.6746 51.7175V61.1685C31.6746 62.4734 30.6168 63.5313 29.3118 63.5313C28.0069 63.5313 26.9491 62.4734 26.9491 61.1685V51.7175C26.9491 50.4126 28.0069 49.3548 29.3118 49.3548Z"
						fill="black"
					></path>
					<path
						d="M56.6053 16.2578C57.2578 17.3879 56.8706 18.8329 55.7405 19.4854L47.5557 24.2109C46.4256 24.8633 44.9806 24.4761 44.3281 23.3461C43.6757 22.216 44.0629 20.7709 45.1929 20.1185L53.3777 15.393C54.5078 14.7405 55.9529 15.1277 56.6053 16.2578Z"
						fill="black"
					></path>
					<path
						d="M14.2958 40.6852C14.9482 41.8153 14.561 43.2603 13.4309 43.9128L5.24613 48.6383C4.11604 49.2907 2.67101 48.9035 2.01855 47.7734C1.3661 46.6434 1.75329 45.1983 2.88338 44.5459L11.0682 39.8204C12.1983 39.1679 13.6433 39.5551 14.2958 40.6852Z"
						fill="black"
					></path>
					<path
						d="M56.6052 47.7734C55.9528 48.9035 54.5078 49.2907 53.3777 48.6383L45.1929 43.9128C44.0628 43.2603 43.6756 41.8153 44.328 40.6852C44.9805 39.5551 46.4255 39.1679 47.5556 39.8204L55.7404 44.5459C56.8705 45.1983 57.2577 46.6433 56.6052 47.7734Z"
						fill="black"
					></path>
					<path
						d="M14.2958 23.3461C13.6433 24.4761 12.1983 24.8633 11.0682 24.2109L2.88342 19.4854C1.75334 18.8329 1.36614 17.3879 2.01859 16.2578C2.67105 15.1277 4.11608 14.7405 5.24617 15.393L13.431 20.1185C14.5611 20.7709 14.9483 22.216 14.2958 23.3461Z"
						fill="black"
					></path>
					{/* Add other paths for the light mode icon as needed */}
				</svg>
			)}
		</button>
	);
};

export default ThemeToggle;

/*export const ThemeToggle = () => {
    return (
        <button className={styles["theme-toggle"]} id="themeToggle" type="button" role="switch" aria-checked="false">
            <span className={styles["theme-toggle__label"]}>Toggle light or dark mode</span>
            <span className={styles["theme-toggle__pseudo-button"]}></span>

            <svg className={styles["theme-toggle__icon"]} width="58" height="64" viewBox="0 0 58 64">
                <circle cx="29.3119" cy="32.0006" r="11.8689" fill="black"></circle>
                <path
                    d="M29.3118 0.5C30.6168 0.5 31.6746 1.55784 31.6746 2.86275V12.3137C31.6746 13.6187 30.6168 14.6765 29.3118 14.6765C28.0069 14.6765 26.9491 13.6187 26.9491 12.3137V2.86275C26.9491 1.55784 28.0069 0.5 29.3118 0.5Z"
                    fill="black"></path>
                <path
                    d="M29.3118 49.3548C30.6168 49.3548 31.6746 50.4126 31.6746 51.7175V61.1685C31.6746 62.4734 30.6168 63.5313 29.3118 63.5313C28.0069 63.5313 26.9491 62.4734 26.9491 61.1685V51.7175C26.9491 50.4126 28.0069 49.3548 29.3118 49.3548Z"
                    fill="black"></path>
                <path
                    d="M56.6053 16.2578C57.2578 17.3879 56.8706 18.8329 55.7405 19.4854L47.5557 24.2109C46.4256 24.8633 44.9806 24.4761 44.3281 23.3461C43.6757 22.216 44.0629 20.7709 45.1929 20.1185L53.3777 15.393C54.5078 14.7405 55.9529 15.1277 56.6053 16.2578Z"
                    fill="black"></path>
                <path
                    d="M14.2958 40.6852C14.9482 41.8153 14.561 43.2603 13.4309 43.9128L5.24613 48.6383C4.11604 49.2907 2.67101 48.9035 2.01855 47.7734C1.3661 46.6434 1.75329 45.1983 2.88338 44.5459L11.0682 39.8204C12.1983 39.1679 13.6433 39.5551 14.2958 40.6852Z"
                    fill="black"></path>
                <path
                    d="M56.6052 47.7734C55.9528 48.9035 54.5078 49.2907 53.3777 48.6383L45.1929 43.9128C44.0628 43.2603 43.6756 41.8153 44.328 40.6852C44.9805 39.5551 46.4255 39.1679 47.5556 39.8204L55.7404 44.5459C56.8705 45.1983 57.2577 46.6433 56.6052 47.7734Z"
                    fill="black"></path>
                <path
                    d="M14.2958 23.3461C13.6433 24.4761 12.1983 24.8633 11.0682 24.2109L2.88342 19.4854C1.75334 18.8329 1.36614 17.3879 2.01859 16.2578C2.67105 15.1277 4.11608 14.7405 5.24617 15.393L13.431 20.1185C14.5611 20.7709 14.9483 22.216 14.2958 23.3461Z"
                    fill="black"></path>
            </svg>

            <svg
                className={`${styles["theme-toggle__icon"]} ${styles["theme-toggle__icon--dark"]}`}
                width="46"
                height="46"
                viewBox="0 0 46 46"
            >
                <path
                    d="M22.5981 3.21225C23.0548 2.84182 23.2187 2.2182 23.0033 1.67107C22.788 1.12394 22.2429 0.779467 21.6562 0.819748C10.0885 1.61408 0.952271 11.2476 0.952271 23.0162C0.952271 35.3042 10.9137 45.2656 23.2016 45.2656C34.672 45.2656 44.1135 36.5869 45.3207 25.437C45.384 24.8524 45.0612 24.2942 44.523 24.0574C43.9847 23.8207 43.3551 23.9601 42.9671 24.4019C40.2621 27.4811 36.2996 29.4214 31.8823 29.4214C23.7368 29.4214 17.1336 22.8182 17.1336 14.6727C17.1336 10.0465 19.262 5.91848 22.5981 3.21225Z"
                    fill="black"></path>
            </svg>
        </button>
    )
}*/
