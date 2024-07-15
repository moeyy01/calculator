import styles from "@/styles/Header.module.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { t } from "i18next";

interface HeaderProps {
	toggleSidebar: () => void;
}

function Header({ toggleSidebar }: HeaderProps): JSX.Element {
	return (
		<header className={styles["header"]}>
			<div className={styles["header-left"]}>
				<FontAwesomeIcon
					className={styles["sidebar-icon"]}
					icon={faBars}
					size="xl"
					fixedWidth
					role="button"
					tabIndex={0}
					title={t("sidebar").toString()}
					onClick={toggleSidebar}
				/>
				<h1>{t("calculator")}</h1>
			</div>
			<a
				href="https://github.com/shangzhenyang/calculator"
				target="_blank"
				rel="noreferrer"
				title="GitHub"
			>
				<FontAwesomeIcon
					icon={faGithub}
					size="xl"
					fixedWidth
				/>
			</a>
		</header>
	);
}

export default Header;
