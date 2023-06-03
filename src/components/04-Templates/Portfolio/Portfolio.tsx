import style from "./Portfolio.module.scss"
import Modal from "../../01-Atoms/Modal/Modal.tsx";
import {projectList} from "../../00-Base/ProjectList/ProjectList.tsx";

const Portfolio = () => {
    return (
        <section id={"portfolio"} className={style.container}>
            <h5>PORTFOLIO</h5>
            <h2>WORK I HAVE <span className={"gradient"}>DONE</span>.</h2>
            <div className={style.projects}>
                {projectList.map((project, idx) => (
                    <Modal {...project} key={idx}>
                        <img src={project.background} key={"img" + idx} alt={project.title}/>
                        <div className={style.labelContainer} key={"div" + idx}>
                            <span>{project.title}</span>
                        </div>
                    </Modal>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;