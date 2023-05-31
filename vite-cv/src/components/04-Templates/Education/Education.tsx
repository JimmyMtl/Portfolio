import style from "./Education.module.scss"
import ScrollButton from "../../01-Atoms/ScrollButton/ScrollButton.tsx";
import Epitech from "../../00-Base/assets/images/Logos/Epitech.png"
import CardsList from "../../03-Organisms/CardsList/CardsList.tsx";
import Loritz from "../../00-Base/assets/images/Logos/Loritz.png"

const educationList = [
    {
        title: "MSC, Titre d'architecte logiciel, développeur d'application (Bac+5)",
        location: <><b>EPITECH</b>, Nancy (France)</>,
        years: "2021 - July 28, 2023",
        logo: Epitech

    },
    {
        title: "Pré-MSc, Titre de responsable projet Web et Mobile (Bac+3)",
        location: <><b>EPITECH</b>, Nancy (France)</>,
        years: "2020 - 2021",
        logo: Epitech

    },
    {
        title: "BTS, SN option Informatique et Réseaux",
        location: <><b>Lycée Henri Loritz</b>, Nancy (France)</>,
        years: "2016 - 2018",
        logo: Loritz

    }
]

const Education = () => {
    return (
        <section className={style.container} id={"educationexperiences"}>
            <h2>[EDU]<span className="gradient">CATION</span>.</h2>
            <CardsList list={educationList} color={"light"}/>
            <ScrollButton href={"#portfolio"}/>
        </section>
    );
};

export default Education;