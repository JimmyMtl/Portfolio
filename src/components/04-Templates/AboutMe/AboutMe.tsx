import style from "./AboutMe.module.scss"
import profile from "../../00-Base/assets/images/profile.jpg"
import CalendarCheck from "../../01-Atoms/SVG/CalendarCheck/CalendarCheck.tsx";
import School from "../../01-Atoms/SVG/School/School.tsx";
import ScrollButton from "../../01-Atoms/ScrollButton/ScrollButton.tsx";
import Github from "../../01-Atoms/SVG/Github/Github.tsx";
import Gitlab from "../../01-Atoms/SVG/Gitlab/Gitlab.tsx";
import Stackoverflow from "../../01-Atoms/SVG/Stackoverflow/Stackoverflow.tsx";

const AboutMe = () => {
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
                    <h2>ABOUT <span className="gradient">ME</span>.</h2>
                    <h3>Freshly graduated Software engineer</h3>
                    <p>I'm Jimmy MARTEL, a soon-to-be graduate software architect student from Epitech, completing
                        my
                        studies in July 2023. I am driven by a passion for technical innovations, constantly seeking
                        to
                        explore the latest advancements in the field. JavaScript holds a special place in my heart,
                        and
                        I possess a deep expertise in technologies such as TypeScript, React.js, Next.js, and
                        Node.js.
                        Additionally, I enjoy working with Python and C#. </p>

                    <p>
                        My skill set encompasses the full spectrum of development, ranging from front-end to
                        back-end,
                        including devOps. I approach my work with humility, constantly striving to learn and
                        grow,
                        while
                        showcasing my expertise.
                    </p>


                    <div className={style.logosContainer}>
                        <CalendarCheck className={style.logo}/>
                        <div>
                            <span>Availability</span>
                            <p>From July 31, 2023</p>
                        </div>
                        <School className={style.logo}/>
                        <div>
                            <span>School</span>
                            <a href={"https://epitech.eu"} target={"_blank"} rel={"noreferrer"}>Epitech Nancy</a>
                        </div>
                    </div>

                </div>
            </div>
            <ScrollButton href={"#educationexperiences"}/>
        </section>
    );
};

export default AboutMe;