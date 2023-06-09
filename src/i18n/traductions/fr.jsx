import {Trans} from "react-i18next";

const Test = () => {
    return (
        <h3>
            A PROPOS<span className={"gradient"}>DE MOI</span>.
        </h3>
    );
};
const Fr = {
    "navbar": {
        "about": "A propos",
        "educations": "Formations",
        "experiences": "Experiences",
        "projects": "Projets",
        "contact": "Contact",
        "download": "Télécharger mon CV"
    },
    "profile": {
        "title": "Salut ! Je m'appelle",
        "subtitle": "Ingénieur logiciel"
    },
    "aboutme": {
        "title_1": "A PROPOS",
        "title_2": "DE MOI",
        "subtitle": "Ingénieur logiciel fraîchement diplômé",
        "availability": "Disponibilité",
        "availability_date": "À partir du 31 juillet 2023",
        "school": "École",
        "paragraph_1": "Je m'appelle Jimmy MARTEL, étudiant architecte logiciel prochainement diplômé de l'école Epitech en juillet 2023. Ma passion pour les innovations techniques m'anime et me pousse à explorer les avancées les plus récentes du domaine. Adepte particulièrement du langage JavaScript, avec une expertise approfondie dans des technologies telles que TypeScript, React.js, Next.js et Node.js, j'apprécie également travailler sur du Python, Java, C, C# et C++.",
        "paragraph_2": "Mes compétences couvrent l'ensemble du spectre du développement, allant du front-end au back-end, en passant par le devOps. Je m'efforce d'apporter une approche humble à mes travaux, cherchant constamment à apprendre et à grandir, tout en mettant en valeur mon savoir-faire.",

    },
}


export default Fr;
