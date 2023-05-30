import style from "./Navbar.module.scss"
import Download from "../../01-Atoms/SVG/Download.tsx";

const Navbar = () => {
    return (
        <nav className={style.container}>
            <div>
                <ul className={style.linksWrapper}>
                    <li><a href="#">A propos</a></li>
                    <li><a href="#">CV</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <a href="/cv.pdf" download className={style.downloadButton}><Download/>Télécharger</a>
            </div>
        </nav>
    );
};

export default Navbar;