import style from "./ScrollButton.module.scss"
import DownChevron from "../SVG/DownChevron/DownChevron.tsx";

type Props = {
    href: string
}
const ScrollButton = ({href}: Props) => {
    return (
        <a href={href || "#"} className={style.container}>
            <DownChevron className={style.downChevron}/>
        </a>
    );
};

export default ScrollButton;