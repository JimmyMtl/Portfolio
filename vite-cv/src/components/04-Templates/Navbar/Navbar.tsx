import style from "./Navbar.module.scss"
import Download from "../../01-Atoms/SVG/Download/Download.tsx";

const Navbar = () => {
    return (
        <nav className={style.container}>
            <div>
                <ul className={style.linksWrapper}>
                    <li><a href="#aboutme">About</a></li>
                    <li><a href="#formations">Formations</a></li>
                    <li><a href="#">Experiences</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                    <li>
                        <a href="/cv.pdf" download className={style.downloadButton}><Download/>Télécharger</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;