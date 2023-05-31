import style from "./Modal.module.scss"
import React, {useState} from "react";

type Props = {
    children: React.ReactNode
}
const Modal = ({children}: Props) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true)
    const handleHide = () => setShow(false)
    return (
        <>
            <button type={"button"} className={style.button} onClick={handleShow}>
                {children}
            </button>
            <div className={`${style.container} ${show ? style.show : ""}`}>
                <button type={"button"} onClick={handleHide}>x</button>
            </div>
        </>
    );
};

export default Modal;