import style from "./StarsBackground.module.scss"
const StarsBackground = () => {
    return (
        <div className={style.container}>
            <div className={style.stars}></div>
            <div className={style.stars}></div>
            <div className={style.stars}></div>
            <div className={style.stars}></div>
            <div className={style.stars}></div>
            <div className={style.stars}></div>
            <div className={style.stars}></div>
            <div className={style.stars}></div>
        </div>
    );
};

export default StarsBackground;