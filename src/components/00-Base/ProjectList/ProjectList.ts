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

export const projectList = [
    {
        background: clubJpg,
        backgroundUrl: clubPng,
        title: 'Club AtouTalent',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.',
        technologies: [
            {
                name: 'React.js',
                icon: Github

            },
            {
                name: 'Node.js',
                icon: Github

            },
            {
                name: 'Next.js',
                icon: Github

            }, {
                name: 'Sass',
                icon: Github

            }, {
                name: 'PostgreSQL',
                icon: Github

            }, {
                name: 'Docker',
                icon: Github

            }, {
                name: 'Platform.sh',
                icon: Github

            }],
        links: [
            {
                name: 'Github',
                url: 'https://github.com',
                icon: Github

            },
            {
                name: 'Live',
                url: 'https://github.com',
                icon: Github

            }
        ]
    }, {
        background: movielookJpg,
        backgroundUrl: movielookPng,
        title: 'MovieLook',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.',
        technologies: [
            {
                name: 'TypeScript',
                icon: Github

            }, {
                name: 'React.js',
                icon: Github

            },{
                name: 'Node.js',
                icon: Github

            },
            {
                name: 'Next.js',
                icon: Github

            },
            {
                name: 'Sass',
                icon: Github

            },
            {
                name: 'PostgreSQL',
                icon: Github

            },
            {
                name: 'Strapi',
                icon: Github
            },
            {
                name: 'PM2',
                icon: Github
            },
            {
                name: 'Nginx',
                icon: Github
            }],
        links: [
            {
                name: 'Github',
                url: 'https://github.com',
                icon: Github

            },
            {
                name: 'Live',
                url: 'https://github.com',
                icon: Github

            }
        ]
    }, {
        background: hameauJpg,
        backgroundUrl: hameauPng,
        title: 'Le Hameau de la Savouillane',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.',
        technologies: [
            {
                name: 'Shopify',
                icon: Github

            }],
        links: [
            {
                name: 'Github',
                url: 'https://github.com',
                icon: Github

            },
            {
                name: 'Live',
                url: 'https://github.com',
                icon: Github

            }
        ]
    }, {
        background: mtlkJpg,
        backgroundUrl: mtlkPng,
        title: 'MTLK IT Solutions',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.',
        technologies: [
            {
                name: 'React',
                icon: Github

            },
             {
                name: 'Sass',
                icon: Github

            },
             {
                name: 'Docker',
                icon: Github

            },
             {
                name: 'PM2',
                icon: Github

            },
            {
                name: 'Nginx',
                icon: Github
            }],
        links: [
            {
                name: 'Github',
                url: 'https://github.com',
                icon: Github

            },
            {
                name: 'Live',
                url: 'https://github.com',
                icon: Github

            }
        ]
    }, {
        background: stlogiksJpg,
        backgroundUrl: stlogiksPng,
        title: 'ST Logiks',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.',
        technologies: [
            {
                name: 'HTML',
                icon: Github

            },
            {
                name: 'CSS',
                icon: Github

            }, {
                name: 'JS',
                icon: Github

            }],
        links: [
            {
                name: 'Github',
                url: 'https://github.com',
                icon: Github

            },
            {
                name: 'Live',
                url: 'https://github.com',
                icon: Github

            }
        ]
    },

]