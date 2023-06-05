import style from "./Navbar.module.scss"
import Download from "../../01-Atoms/SVG/Download/Download.tsx";
import {useTranslation} from "react-i18next";

const Navbar = () => {
    const {t} = useTranslation();

    return (
        <nav className={style.container}>
            <div>
                <ul className={style.linksWrapper}>
                    <li><a href="#aboutme">{t('navbar.about')}</a></li>
                    <li><a href="#educations">{t('navbar.educations')}</a></li>
                    <li><a href="#experiences">{t('navbar.experiences')}</a></li>
                    <li><a href="#portfolio">{t('navbar.projects')}</a></li>
                    <li><a href="#">Contact</a></li>
                    <li>
                        <a href="/cv.pdf" download className={style.downloadButton}><Download/>{t('navbar.download')}</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;