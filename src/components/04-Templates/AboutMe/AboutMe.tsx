import style from "./AboutMe.module.scss"
import profile from "../../00-Base/assets/images/profile.jpg"
import CalendarCheck from "../../01-Atoms/SVG/CalendarCheck/CalendarCheck.tsx";
import School from "../../01-Atoms/SVG/School/School.tsx";
import ScrollButton from "../../01-Atoms/ScrollButton/ScrollButton.tsx";
import Github from "../../01-Atoms/SVG/Github/Github.tsx";
import Gitlab from "../../01-Atoms/SVG/Gitlab/Gitlab.tsx";
import Stackoverflow from "../../01-Atoms/SVG/Stackoverflow/Stackoverflow.tsx";
import {useTranslation} from "react-i18next";

const AboutMe = () => {
    const {t} = useTranslation();

    return (
        <section className={style.container} id="aboutme">
            <div className={style.contentContainer}>
                <div className={style.imgWrapper}>
                    <img src={profile} alt="profile" className={style.profileImage}/>
                    <div className={style.socialContainer}>
                        <a href="https://github.com/JimmyMtl" className={style.socialLink} target={"_blank"}
                           rel={"noreferrer"}>
                            <Github className={style.socialLogo}/>
                        </a>
                        <a href="https://gitlab.com/JimmyMtl" className={style.socialLink} target={"_blank"}
                           rel={"noreferrer"}>
                            <Gitlab className={style.socialLogo}/>
                        </a>
                        <a href="https://stackoverflow.com/users/17913593/hades" className={style.socialLink}
                           target={"_blank"} rel={"noreferrer"}>
                            <Stackoverflow className={style.socialLogo}/>
                        </a>
                    </div>
                </div>
                <div className={style.textContainer}>
                    <h2>{t('aboutme.title_1')} <span className={"gradient"}>{t('aboutme.title_2')}</span></h2>
                    <h3>{t('aboutme.subtitle')}</h3>
                    <p>{t('aboutme.paragraph_1')}</p>
                    <p>{t('aboutme.paragraph_2')}</p>
                    <div className={style.logosContainer}>
                        <CalendarCheck className={style.logo}/>
                        <div>
                            <span>{t('aboutme.availability')}</span>
                            <p>{t('aboutme.availability_date')}</p>
                        </div>
                        <School className={style.logo}/>
                        <div>
                            <span>{t('aboutme.school')}</span>
                            <a href={"https://epitech.eu"} target={"_blank"} rel={"noreferrer"}>Epitech Nancy</a>
                        </div>
                    </div>

                </div>
            </div>
            <ScrollButton href={"#educations"}/>
        </section>
    );
};

export default AboutMe;