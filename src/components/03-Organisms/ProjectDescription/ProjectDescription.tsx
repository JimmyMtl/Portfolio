import style from "./ProjectDescription.module.scss"
import React from "react";


type Props = {
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
const ProjectDescription = ({
                                backgroundUrl,
                                title,
                                description,
                                technologies,
                                links
                            }: Props) => {
    return (
        <div className={style.container}>
            <div className={style.headerContainer}>
                <span style={{backgroundImage: `url(${backgroundUrl})`}} className={style.headerBackground}>
                    <span className={style.overlay}/>
                </span>
                <div className={style.titleWrapper}>
                    <h2 className={style.header}>{title}</h2>
                </div>
            </div>
            <div className={style.content}>
                <h4 className={style.subtitle}>[Des]<span className="gradient">cription</span></h4>
                <p className={style.text}>{description}</p>
                <h4 className={style.subtitle}>[Tech]<span className="gradient">nologies</span></h4>
                <ul className={style.list}>
                    {technologies.map((technology, idx) => (
                        <li className={style.item} key={idx}>
                            <technology.icon className={style.icon}/>
                            {technology.name}
                        </li>
                    ))}
                </ul>
                {links?.length ? <><h4 className={style.subtitle}>[Lin]<span className="gradient">ks</span></h4>
                        <ul className={style.list}>
                            {links.map((link, idx) => (
                                <li className={style.item} key={idx}>
                                    <a href={link.url} target={"_blank"} rel={"noreferrer"}>
                                        <link.icon className={style.icon}/>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </>
                    : null}
            </div>
        </div>
    );
};

export default ProjectDescription;