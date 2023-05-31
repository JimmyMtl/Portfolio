import style from "./Profile.module.scss"
import ScrollButton from "../../01-Atoms/ScrollButton/ScrollButton.tsx";
const Profile = () => {
    return (
        <section className={style.container}>
            {/*<StarsBackground/>*/}

            <div className={style.wrapper}>
                <div className={style.textWrapper}>
                    <h1>Hi! I’m <span className={"gradient"}>Jimmy</span>.</h1>
                    <h3>Software engineer</h3>
                    {/*<div className={style.linksWrapper}>*/}
                    {/*    <a href="#" className={style.contact}>Me contacter</a>*/}
                    {/*    <a href="/cv.pdf" className={style.download} download>Télécharger mon CV</a>*/}
                    {/*</div>*/}
                </div>
                {/*<div className={style.profileImage}>*/}
                {/*    <img src={ProfileImage} alt="Photo de profil"/>*/}
                {/*</div>*/}
            </div>
            <ScrollButton href={"#aboutme"}/>
        </section>
    );
};

export default Profile;