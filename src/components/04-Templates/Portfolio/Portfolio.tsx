import style from "./Portfolio.module.scss"
import club from "../../00-Base/assets/images/Projects/ClubAtouTalent/ClubAtouTalent.jpg"
import movielook from "../../00-Base/assets/images/Projects/MovieLook/MovieLook.jpg"
import mtlk from "../../00-Base/assets/images/Projects/MTLK/MTLK.jpg"
import stlogiks from "../../00-Base/assets/images/Projects/STLogiks/STLogiks.jpg"
import hameau from "../../00-Base/assets/images/Projects/HameauDeLaSavouillane/HameauDeLaSavaouillane.jpg"
import Modal from "../../01-Atoms/Modal/Modal.tsx";

const Portfolio = () => {
    return (
        <section id={"portfolio"} className={style.container}>
            <h5>PORTFOLIO</h5>
            <h2>WORK I HAVE <span className={"gradient"}>DONE</span>.</h2>
            <div className={style.projects}>

                <Modal>
                    {/*// <a href={"#"} title={"Club AtouTalent"} className={style.project} target={"_blank"}*/}
                    {/*   rel={"noreferrer"}>*/}
                        <img src={club} alt="Club AtouTalent"/>
                        <div className={style.labelContainer}>
                            <span>Club AtouTalent</span>
                        </div>
                    {/*</a>*/}
                </Modal>
                <Modal>
                    {/*<a href={"https://movielook.mtlk.fr"} title={"MovieLook"} className={style.project}*/}
                    {/*   target={"_blank"}*/}
                    {/*   rel={"noreferrer"}>*/}
                        <img src={movielook} alt="MovieLook"/>
                        <div className={style.labelContainer}>
                            <span>MovieLook</span>
                        </div>
                    {/*</a>*/}
                </Modal>
                <Modal>
                    {/*<a href={"https://hameau-de-la-savouillane.com"} title={"Hameau de la Savouillane"}*/}
                    {/*   className={style.project} target={"_blank"} rel={"noreferrer"}>*/}
                        <img src={hameau} alt="Hameau de la Savouillane"/>
                        <div className={style.labelContainer}>
                            <span>Hameau de la Savouillane</span>
                        </div>
                    {/*</a>*/}
                </Modal>
                <Modal>
                    {/*<a href={"https://mtlk.fr"} title={"MTLK IT"} className={style.project} target={"_blank"}*/}
                    {/*   rel={"noreferrer"}>*/}
                        <img src={mtlk} alt="MTLK IT"/>
                        <div className={style.labelContainer}>
                            <span>MTLK IT</span>
                        </div>
                    {/*</a>*/}
                </Modal>
                <Modal>
                    {/*<a href={"https://stlogiks.fr"} title={"ST Logiks project"} className={style.project}*/}
                    {/*   target={"_blank"}*/}
                    {/*   rel={"noreferrer"}>*/}
                        <img src={stlogiks} alt="ST Logiks"/>
                        <div className={style.labelContainer}>
                            <span>ST Logiks</span>
                        </div>
                    {/*</a>*/}
                </Modal>
            </div>
        </section>
    );
};

export default Portfolio;