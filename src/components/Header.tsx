import { LogoLink } from "@components/LogoLink";
import { MainNav } from "@components/MainNav";
import ThemeToggle from "./ThemeToggle";
import { GridLayout, GridLayoutItem } from "./GridLayout";
import styles from "@components/Header.module.css";

export const Header = () => {
    return (
        <header className={styles["header"]}>
            <GridLayout>
                <GridLayoutItem>
                    <div className={styles["header__inner"]}>
                        <div className={styles["header__logo"]}>
                            <LogoLink link="/" />
                        </div>

                        <div className={styles["header__nav"]}>
                            <MainNav />
                        </div>

                        <div className={styles["header__nav"]}>
                            <ThemeToggle />
                        </div>
                    </div>
                </GridLayoutItem>
            </GridLayout>
        </header>
    )
}
