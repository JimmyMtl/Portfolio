import style from "./Navbar.module.scss"
import Download from "../../01-Atoms/SVG/Download/Download.tsx";
import {useTranslation} from "react-i18next";
import Lang from "../../../i18n/Lang.tsx";
import {useState} from "react";
import Close from "../../01-Atoms/SVG/Close/Close.tsx";
import Hamburger from "../../01-Atoms/SVG/Hamburger/Hamburger.tsx";

const Navbar = () => {
    const {t} = useTranslation();
    const [show, setShow] = useState(false);
    const onShow = () => setShow(true);
    const onHide = () => setShow(false);
    return (
        <nav className={`${style.container} ${show ? style.active : ""}`}>
            <Lang/>

            <ul className={style.linksWrapper}>
                <li><a href="#aboutme">{t('navbar.about')}</a></li>
                <li><a href="#educations">{t('navbar.educations')}</a></li>
                <li><a href="#experiences">{t('navbar.experiences')}</a></li>
                <li><a href="#portfolio">{t('navbar.projects')}</a></li>
                <li><a href="#">Contact</a></li>
                <li>
                    <a href="/cv.pdf" download className={style.downloadButton}><Download/>{t('navbar.download')}
                    </a></li>
            </ul>
            <button type={"button"} className={style.openBtn} onClick={onShow}><Hamburger/></button>
            <button type={"button"} className={style.closeBtn} onClick={onHide}><Close/></button>
        </nav>
    );
};

export default Navbar;