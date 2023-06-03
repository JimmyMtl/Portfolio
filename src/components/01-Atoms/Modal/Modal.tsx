import style from "./Modal.module.scss"
import React, {useState} from "react";
import Close from "../SVG/Close/Close.tsx";
import ProjectDescription from "../../03-Organisms/ProjectDescription/ProjectDescription.tsx";

type Props = {
    children: React.ReactNode,
    backgroundUrl: string,
    title: string,
    description: React.ReactNode,
    technologies: {
        name: string,
        icon: React.ElementType
    }[],
    links: {
        name: string,
        url: string,
        icon: React.ElementType
    }[]
}
const Modal = ({children, ...props}: Props) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true)
    const handleHide = () => setShow(false)
    return (
        <>
            <button type={"button"} className={style.button} onClick={handleShow}>
                {children}
            </button>
            <div className={`${style.wrapper} ${show ? style.show : style.hide}`}>
                <button type={"button"} className={style.closeBtn} onClick={handleHide}><Close
                    className={style.closeIcon}/></button>
                <div className={style.container}>
                    <ProjectDescription {...props}/>
                </div>
            </div>
        </>
    );
};

export default Modal;