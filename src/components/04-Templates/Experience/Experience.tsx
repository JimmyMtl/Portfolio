import style from "./Experience.module.scss"
import ScrollButton from "../../01-Atoms/ScrollButton/ScrollButton.tsx";
import CardsList from "../../03-Organisms/CardsList/CardsList.tsx";
import Razorfish from "../../00-Base/assets/images/Logos/Razorfish.png"
import Club from "../../00-Base/assets/images/Logos/ClubAtouTalent.png"
import Mtlk from "../../00-Base/assets/images/Logos/MTLK.png"
import Sncf from "../../00-Base/assets/images/Logos/Sncf.png"


const experienceList = [
    {
        title: "Intern Fullstack Developper",
        location: <><b>Razorfish</b>, Nancy (France)</>,
        years: "2022 - July 28, 2023",
        logo: Razorfish

    },
    {
        title: "Pré-MSc, Titre de responsable projet Web et Mobile (Bac+3)",
        location: <><b>CLUB ATOUTALENT</b>, Nancy (France)</>,
        years: "2021 - 2022",
        logo: Club

    },
    {
        title: "IT Specialist & Freelance Developper",
        location: <><b>MTLK IT</b>, Nancy (France)</>,
        years: "2020 - Tod.",
        logo: Mtlk
    },
    {
        title: "IT Specialist",
        location: <><b>SNCF</b>, Nancy (France)</>,
        years: "2019 - 2020",
        logo: Sncf
    }
]
const Experience = () => {
    return (
        <section className={style.container} id={"educationexperiences"}>
            <h2>[EXP]<span className="gradient">ERIENCE</span>.</h2>
            <CardsList list={experienceList} color={"dark"}/>
            <ScrollButton href={"#portfolio"}/>
        </section>
    );
};

export default Experience;