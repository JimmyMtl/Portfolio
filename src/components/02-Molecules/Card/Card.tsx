import style from "./Card.module.scss"

type Props = {
    title: string,
    location: React.ReactNode,
    years: string,
    logo: string,
    color: string
}
const Card = ({title, location, years, logo, color}: Props) => {
    return (
        <li className={`${style.container} ${style[color]}`}>
            <img className={style.logo} src={logo} alt="Logo"/>
            <div className={style.textContainer}>
                <h5>{title}</h5>
                <p>{location}</p>
                <p>{years}</p>
            </div>
        </li>
    );
};

export default Card;