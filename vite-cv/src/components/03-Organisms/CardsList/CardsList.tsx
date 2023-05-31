import style from "./CardsList.module.scss"
import Card from "../../02-Molecules/Card/Card.tsx";

type Props =
    {
        list: {
            title: string,
            location: React.ReactNode,
            years: string,
            logo: string
        }[],
        color: string
    }
const CardsList = ({list, color}: Props) => {
    return (
        <ul className={style.container}>
            {list.map((expe, idx) => (
                <Card key={idx} {...expe} color={color}/>
            ))}
        </ul>
    );
};

export default CardsList;