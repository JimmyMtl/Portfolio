import style from "./Profile.module.scss"
import ScrollButton from "../../01-Atoms/ScrollButton/ScrollButton.tsx";
import {useTranslation} from "react-i18next";
import background from "../../00-Base/assets/background.jpg"

const Profile = () => {
    const {t} = useTranslation();

    return (
        <section className={style.container}>
            {/*<StarsBackground/>*/}
            <span className={style.background} style={{backgroundImage: `url('${background}')`}}></span>

            <div className={style.wrapper}>
                <div className={style.textWrapper}>
                    <h1>{t('profile.title')} <span className={"gradient"}>Jimmy</span>.</h1>
                    <h3>{t('profile.subtitle')}</h3>
                </div>
            </div>
            <ScrollButton href={"#aboutme"}/>
        </section>
    );
};

export default Profile;