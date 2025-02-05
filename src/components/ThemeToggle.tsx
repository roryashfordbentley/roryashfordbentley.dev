"use client"; // Required for client-side rendering in Next.js

import { useState, useEffect, useCallback } from "react";

import styles from "@components/ThemeToggle.module.css"

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
      className={`theme-toggle ${theme === "dark" ? "theme-toggle--dark" : ""}`}
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
          className={styles["theme-toggle__icon theme-toggle__icon--dark"]}
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
        <svg className={styles["theme-toggle__icon"]} width="58" height="64" viewBox="0 0 58 64">
          <circle cx="29.3119" cy="32.0006" r="11.8689" fill="black"></circle>
          <path
            d="M29.3118 0.5C30.6168 0.5 31.6746 1.55784 31.6746 2.86275V12.3137C31.6746 13.6187 30.6168 14.6765 29.3118 14.6765C28.0069 14.6765 26.9491 13.6187 26.9491 12.3137V2.86275C26.9491 1.55784 28.0069 0.5 29.3118 0.5Z"
            fill="black"
          ></path>
          {/* Add other paths for the light mode icon as needed */}
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
