import style from "./Profile.module.scss"
import ProfileImage from "../../00-Base/assets/images/Profile.png";

const Profile = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.textWrapper}>
                    <h2>Ingénieur logiciel</h2>
                    <h1>Jimmy MARTEL</h1>
                    <div className={style.linksWrapper}>
                        <a href="#" className={style.contact}>Me contacter</a>
                        <a href="/cv.pdf" className={style.download} download>Télécharger mon CV</a>
                    </div>
                </div>
                <div className={style.profileImage}>
                    <img src={ProfileImage} alt="Photo de profil"/>
                </div>
            </div>
        </div>
    );
};

export default Profile;