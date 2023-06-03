import clubJpg from "../assets/images/Projects/ClubAtouTalent/ClubAtouTalent.jpg";
import clubPng from "../assets/images/Projects/ClubAtouTalent/ClubAtouTalent.png";
import movielookJpg from "../assets/images/Projects/MovieLook/MovieLook.jpg";
import movielookPng from "../assets/images/Projects/MovieLook/MovieLook.png";
import hameauJpg from "../assets/images/Projects/HameauDeLaSavouillane/HameauDeLaSavaouillane.jpg";
import hameauPng from "../assets/images/Projects/HameauDeLaSavouillane/HameauDeLaSavaouillane.png";
import mtlkJpg from "../assets/images/Projects/MTLK/MTLK.jpg";
import mtlkPng from "../assets/images/Projects/MTLK/MTLK.png";
import stlogiksJpg from "../assets/images/Projects/STLogiks/STLogiks.jpg";
import stlogiksPng from "../assets/images/Projects/STLogiks/STLogiks.png";
import Github from "../../01-Atoms/SVG/Github/Github.tsx";
import React from "../../01-Atoms/SVG/React.tsx";
import NodeJs from "../../01-Atoms/SVG/Node.js.tsx";
import NextJs from "../../01-Atoms/SVG/Next.js.tsx";
import Sass from "../../01-Atoms/SVG/Sass.tsx";
import Docker from "../../01-Atoms/SVG/Docker.tsx";
import PlatformSh from "../../01-Atoms/SVG/Platform.sh.tsx";
import TypeScript from "../../01-Atoms/SVG/TypeScript.tsx";
import PostgreSQL from "../../01-Atoms/SVG/PostgreSQL.tsx";
import Strapi from "../../01-Atoms/SVG/Strapi.tsx";
import PM2 from "../../01-Atoms/SVG/PM2.tsx";
import Nginx from "../../01-Atoms/SVG/Nginx.tsx";
import Shopify from "../../01-Atoms/SVG/Shopify.tsx";
import HTML from "../../01-Atoms/SVG/HTML.tsx";
import CSS from "../../01-Atoms/SVG/CSS.tsx";
import Js from "../../01-Atoms/SVG/JS.tsx";
import Vercel from "../../01-Atoms/SVG/Vercel.tsx";
import HameauDeLaSavouillane from "../../01-Atoms/SVG/HameauDeLaSavouillane.tsx";
import MovieLook from "../../01-Atoms/SVG/MovieLook.tsx";
import MTLK from "../../01-Atoms/SVG/MTLK.tsx";
import STLogiks from "../../01-Atoms/SVG/STLogiks.tsx";

export const projectList = [
    {
        background: clubJpg,
        backgroundUrl: clubPng,
        title: 'Club AtouTalent',
        description: <><p>Development of a customized web application for a business association as part of my
            work-study program.</p>
            <p>Full project management, utilizing best development practices and efficient working methods.</p>
            <p>Comprehensive and rewarding experience encompassing all aspects of project production.</p></>,
        technologies: [
            {
                name: 'React.js',
                icon: React

            },
            {
                name: 'Node.js',
                icon: NodeJs

            },
            {
                name: 'Next.js',
                icon: NextJs

            }, {
                name: 'Sass',
                icon: Sass

            }, {
                name: 'PostgreSQL',
                icon: PostgreSQL

            }, {
                name: 'Docker',
                icon: Docker

            }, {
                name: 'Platform.sh',
                icon: PlatformSh

            }],
        links: []
    }, {
        background: movielookJpg,
        backgroundUrl: movielookPng,
        title: 'MovieLook',
        description: <>
            <p>As part of a technical assessment, I created a web application called MovieLook that allows users to
                select their preferred movie genre and receive genre-based film suggestions.</p>
            <p>The application also includes a movie search engine implemented using The Movie DB API.</p>
        </>,
        technologies: [
            {
                name: 'TypeScript',
                icon: TypeScript

            }, {
                name: 'React.js',
                icon: React

            }, {
                name: 'Node.js',
                icon: NodeJs

            },
            {
                name: 'Next.js',
                icon: NextJs

            },
            {
                name: 'Sass',
                icon: Sass

            },
            {
                name: 'PostgreSQL',
                icon: PostgreSQL

            },
            {
                name: 'Strapi',
                icon: Strapi
            },
            {
                name: 'PM2',
                icon: PM2
            },
            {
                name: 'Nginx',
                icon: Nginx
            }, {
                name: 'Vercel',
                icon: Vercel

            }],
        links: [
            {
                name: 'Github Front',
                url: 'https://github.com',
                icon: Github

            },
            {
                name: 'Test it!',
                url: 'https://movielook.mtlk.fr',
                icon: MovieLook

            }
        ]
    }, {
        background: hameauJpg,
        backgroundUrl: hameauPng,
        title: 'Le Hameau de la Savouillane',
        description: <><p>Website created for a bed and breakfast owner located in Buis-les-Baronnies, in the south
            of France. The website, named "Le Hameau de la Savouillane," allows visitors to explore the available rooms,
            view the services offered, and directly contact the owner to make a reservation.</p>
            <p>Built using the Shopify platform.</p></>,
        technologies: [
            {
                name: 'Shopify',
                icon: Shopify

            }],
        links: [
            {
                name: 'Test it!',
                url: 'https://hameau-de-la-savouillane.com',
                icon: HameauDeLaSavouillane

            }
        ]
    }, {
        background: mtlkJpg,
        backgroundUrl: mtlkPng,
        title: 'MTLK IT Solutions',
        description: <p>Showcase website to present the services of my IT solutions company, specializing in web
            development and troubleshooting, in the Nancy region.</p>,
        technologies: [
            {
                name: 'React',
                icon: React

            },
            {
                name: 'Sass',
                icon: Sass

            },
            {
                name: 'Docker',
                icon: Docker

            },
            {
                name: 'PM2',
                icon: PM2

            },
            {
                name: 'Nginx',
                icon: Nginx
            }],
        links: [
            {
                name: 'See it!',
                url: 'https://mtlk.fr',
                icon: MTLK
            }
        ]
    }, {
        background: stlogiksJpg,
        backgroundUrl: stlogiksPng,
        title: 'ST Logiks',
        description: <p>Showcase website to present the services of STLogiks IT solutions company. Specialised in
            computer troubleshooting in the Grand Est region. </p>,
        technologies: [
            {
                name: 'HTML',
                icon: HTML

            },
            {
                name: 'CSS',
                icon: CSS

            }, {
                name: 'JS',
                icon: Js

            }],
        links: [
            {
                name: 'See it!',
                url: 'https://stlogiks.fr',
                icon: STLogiks

            }
        ]
    },

]